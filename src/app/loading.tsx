const Loading = () => {
  return (
    <div className="w-screen overflow-hidden drop-shadow-2xl">
      <div className="flex p-8 justify-center items-center h-screen">
        <div className="text-center space-y-6">
          <div className="w-24 h-24 max-w-24 mx-h-24 border-4 border-t-success-500 border-primary-700 rounded-full animate-spin mx-auto"></div>
          <div className="text-success-500 font-semibold text-4xl opacity-90 animate-fadeIn">
            Almost There...
          </div>
          <div className="text-secondary-800 text-sm opacity-80 animate-fadeIn">
            <p>We're getting everything ready for you...</p>
            <p>Sit tight for just a moment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
