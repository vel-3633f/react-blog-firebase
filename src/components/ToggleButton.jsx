const ToggleButton = ({ isEditor, setIsEditor }) => {
  const handleCheckboxChange = () => {
    setIsEditor(!isEditor);
  };

  return (
    <div className="flex flex-row justify-end items-center pr-5 my-3 sm:pr-0">
      <p className="mr-5 text-gray-500">Preview</p>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value={isEditor}
          className="sr-only peer"
          onChange={handleCheckboxChange}
        />
        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-blue-500"></div>
      </label>
    </div>
  );
};

export default ToggleButton;
