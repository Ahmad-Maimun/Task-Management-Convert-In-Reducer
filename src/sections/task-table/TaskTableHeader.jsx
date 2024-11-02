import { TextInput } from "flowbite-react";
import { IoSearch } from "react-icons/io5";
function TaskTableHeader({ onSearch }) {
    let changeHandler = (e) => {
        let val = e.target.value;
        onSearch(val);
    };
    return (
        <div className="flex justify-between items-center mt-2 mb-4">
            <h2 className="text-2xl font-bold pl-2 dark:text-white">Your Tasks</h2>
            <div className="max-w-lg">
                <TextInput onChange={changeHandler} id="email4" type="email" rightIcon={IoSearch} required />
            </div>
        </div>
    );
}

export default TaskTableHeader;