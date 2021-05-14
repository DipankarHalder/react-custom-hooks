export const LoaderSnipper = () => {
  return (
    <div className="app-loader-spinner">
      <div className="app-loader-wrrap">
        <svg className="spinner" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" fill="none" strokeWidth="1"></circle>
        </svg>
        <p>Loading content, Please wait a moment...</p>
      </div>
    </div>
  )
}
