
function Loading() {
  return (

    <div className="flex justify-center items-center h-[60vh]">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default Loading