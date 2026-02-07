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

  return (
    <>
      <div className="main">
        <SectionBlock
          sectionId="alpenrose"
          section={content.alpenrose}
          onCtaClick={setActiveModal}
          panelClassName="text-panel-alpenrose"
        />
        <div className="image-panel panel-17">
          <p>17</p>
        </div>
        <div className="image-panel panel-5">
          <p>5</p>
        </div>
        <div className="image-panel panel-21">
          <p>21</p>
        </div>
        <div className="image-panel panel-10">
          <p>10</p>
        </div>

        <SectionBlock
          sectionId="silvies"
          section={content.silvies}
          onCtaClick={setActiveModal}
          panelClassName="text-panel-silvies"
        />
        <div className="image-panel panel-7">
          <p>7</p>
        </div>
        <div className="image-panel panel-31">
          <p>31</p>
        </div>
        <div className="image-panel panel-18">
          <p>18</p>
        </div>
        <div className="image-panel panel-2_">
          <p>2</p>
        </div>

        <SectionBlock
          sectionId="schedule"
          section={content.schedule}
          onCtaClick={() => setActiveModal({ type: 'schedule' })}
          panelClassName="text-panel-schedule"
        />
        <div className="image-panel panel-2">
          <p>2</p>
        </div>
        <div className="image-panel panel-4">
          <p>4</p>
        </div>
        <div className="image-panel panel-8">
          <p>8</p>
        </div>
        <div className="image-panel panel-30">
          <p>30</p>
        </div>
        <div className="image-panel panel-23">
          <p>23</p>
        </div>

        <SectionBlock
          sectionId="investment"
          section={content.investment}
          onCtaClick={setActiveModal}
          panelClassName="text-panel-investment"
        />
        <div className="image-panel panel-33">
          <p>33</p>
        </div>
        <div className="image-panel panel-25">
          <p>25</p>
        </div>
        <div className="image-panel panel-27">
          <p>27</p>
        </div>
        <div className="image-panel panel-9_">
          <p>9</p>
        </div>

        <SectionBlock
          sectionId="accommodations"
          section={content.accommodations}
          onCtaClick={setActiveModal}
          panelClassName="text-panel-accommodations"
        />
        <div className="image-panel panel-9">
          <p>9</p>
        </div>
        <div className="image-panel panel-20">
          <p>20</p>
        </div>
        <div className="image-panel panel-28">
          <p>28</p>
        </div>
        <div className="image-panel panel-6">
          <p>6</p>
        </div>
        <div className="image-panel panel-34">
          <p>34</p>
        </div>

        <SectionBlock
          sectionId="our_story"
          section={content.our_story}
          onCtaClick={setActiveModal}
          panelClassName="text-panel-our_story"
        />
        <div className="image-panel panel-29 dregs">
          <p>29</p>
        </div>
        <div className="image-panel panel-16 dregs">
          <p>16</p>
        </div>
        <div className="image-panel panel-26 dregs">
          <p>26</p>
        </div>
        <div className="image-panel panel-1 dregs">
          <p>1</p>
        </div>
        <div className="image-panel panel-3 dregs">
          <p>3</p>
        </div>
        <div className="image-panel panel-14 dregs">
          <p>14</p>
        </div>
        <div className="image-panel panel-19 dregs">
          <p>19</p>
        </div>
        <div className="image-panel panel-13 dregs">
          <p>13</p>
        </div>
        <div className="image-panel panel-11 dregs">
          <p>11</p>
        </div>
        <div className="image-panel panel-15 dregs">
          <p>15</p>
        </div>
        <div className="image-panel panel-32 dregs">
          <p>32</p>
        </div>
        <div className="image-panel panel-24 dregs">
          <p>24</p>
        </div>
        <div className="image-panel panel-12 dregs">
          <p>12</p>
        </div>
        <div className="image-panel panel-22 dregs">
          <p>22</p>
        </div>
        <div className="image-panel panel-35 dregs">
          <p>35</p>
        </div>
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
