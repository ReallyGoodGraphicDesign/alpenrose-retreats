import SectionModal from './SectionModal';
import ScheduleModal from './ScheduleModal';
import LoadingSkeleton from './components/LoadingSkeleton';
import ErrorToast from './components/ErrorToast';
import SectionBlock from './components/SectionBlock';
import useModal from './hooks/useModal';
import './Main.css';
import { useEffect, useState } from 'react';
import { sanitizeHtml } from './utils/sanitize';

function Main() {
  const { activeModal, setActiveModal, closeModal } = useModal(null);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    setLoading(true);
    setError(null);

    fetch(
      'https://script.google.com/macros/s/AKfycbwHj5C9YjvfjzYzp7Fu0qzKDB2ED1EYlDG89_3ZloCsj3f624o4EoQ504UPfOX2iBkJIg/exec',
      { signal: controller.signal }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((rows) => {
        if (!mounted) return;
        const normalized = Object.fromEntries(
          rows.map((row) => [
            row.section_id,
            {
              ...row,
              // sanitize text/title at fetch time (defense in depth)
              text: sanitizeHtml(row.text),
              title: sanitizeHtml(row.title),
            },
          ])
        );
        setContent(normalized);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        console.error(err);
        setError(
          err.name === 'AbortError'
            ? 'Request timed out'
            : err.message || 'Failed to load'
        );
        setLoading(false);
      })
      .finally(() => clearTimeout(timeoutId));



    return () => {
      mounted = false;
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [retryCount]);

  if (loading) return <LoadingSkeleton />;
  if (error && !content)
    return (
      <div>
        <ErrorToast
          message={error}
          onRetry={() => setRetryCount((c) => c + 1)}
          onClose={() => setError(null)}
        />
      </div>
    );

const alpenroseUseMailto = false;

return (
    <>
      <div className="main">

<SectionBlock
  sectionId="alpenrose"
  section={content.alpenrose}
  onCtaClick={setActiveModal}
  panelClassName="text-panel-alpenrose"
  href={alpenroseUseMailto ? 'mailto:vdullack@gmail.com?subject=Alpenrose%20Retreats%20inquiry' : undefined}
/>

        <div className="image-panel panel-17">
          <p><span>17</span></p>
        </div>
        <div className="image-panel panel-5">
          <p><span>5</span></p>
        </div>
        <div className="image-panel panel-21">
          <p><span>21</span></p>
        </div>
        <div className="image-panel panel-10">
          <p><span>10</span></p>
        </div>

        <SectionBlock
          sectionId="bloom"   
          section={content.bloom}
          onCtaClick={setActiveModal}
          panelClassName="text-panel-bloom"
        />
        <div className="image-panel panel-7">
          <p><span>7</span></p>
        </div>
        <div className="image-panel panel-31">
          <p><span>31</span></p>
        </div>
        <div className="image-panel panel-34">
          <p><span>34</span></p>
        </div>
        <div className="image-panel panel-26_mobiles">
          <p><span><span>26M</span></span></p>
        </div>

        <SectionBlock
          sectionId="schedule"
          section={content.schedule}
          onCtaClick={() => setActiveModal({ type: 'schedule' })}
          panelClassName="text-panel-schedule"
        />
        <div className="image-panel panel-26">
          <p><span>26</span></p>
        </div>
        <div className="image-panel panel-4">
          <p><span>4</span></p>
        </div>
        <div className="image-panel panel-8">
          <p><span>8</span></p>
        </div>
        <div className="image-panel panel-30">
          <p><span>30</span></p>
        </div>
        <div className="image-panel panel-23">
          <p><span>23</span></p>
        </div>

        <SectionBlock
          sectionId="investment"
          section={content.investment}
          onCtaClick={setActiveModal}
          panelClassName="text-panel-investment"
        />
        <div className="image-panel panel-33">
          <p><span>33</span></p>
        </div>
        <div className="image-panel panel-25">
          <p><span>25</span></p>
        </div>
        <div className="image-panel panel-27">
          <p><span>27</span></p>
        </div>
        <div className="image-panel panel-9_mobiles">
          <p><span>9M</span></p>
        </div>

        <SectionBlock
          sectionId="accommodations"
          section={content.accommodations}
          onCtaClick={setActiveModal}
          panelClassName="text-panel-accommodations"
        />
        <div className="image-panel panel-9">
          <p><span>9</span></p>
        </div>
        <div className="image-panel panel-20">
          <p><span>20</span></p>
        </div>
        <div className="image-panel panel-28">
          <p><span>28</span></p>
        </div>
        <div className="image-panel panel-6">
          <p><span>6</span></p>
        </div>
        <div className="image-panel panel-3">
          <p><span>3</span></p>
        </div>

        <SectionBlock
          sectionId="our_story"
          section={content.our_story}
          onCtaClick={setActiveModal}
          panelClassName="text-panel-our_story"
        />
      </div>

      {activeModal?.type === 'section' && (
        <SectionModal
          section={content[activeModal.sectionId]}
          onClose={closeModal}
        />
      )}

      {activeModal?.type === 'schedule' && (
        <ScheduleModal onClose={closeModal} />
      )}
    </>
  );
}

export default Main;
