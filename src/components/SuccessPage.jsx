import PropTypes from 'prop-types';

function SuccessPage({ onNavigate }) {
  return (
    <div className="success-page">
      <h1>Successfully Changed File Names</h1>
      <button onClick={() => onNavigate('landing')}>Back to Landing</button>
    </div>
  );
}

SuccessPage.propTypes = {
  onNavigate: PropTypes.func.isRequired, // onNavigate is a required function
};

export default SuccessPage;
