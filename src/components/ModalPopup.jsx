import { Button, Modal, Label, TextInput, Textarea, Select } from "flowbite-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formValidation } from "../form-validaiton/modalForm";
export function ModalPopup({ onOpen, onClose, onCreate, taskToEdit, onEdit }) {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formValidation),
    });
    const onSubmit = (data) => {
        if (taskToEdit) {
            onEdit(data);
        } else {
            onCreate(data);
        }
        reset();
        onClose();
    };

    let formData = taskToEdit || {
        id: crypto.randomUUID(),
        title: null,
        description: null,
        assignTo: null,
        priority: null,
    };

    return (
        <>
            <Modal show={onOpen} onClose={() => onClose(false)}>
                <Modal.Header>{taskToEdit ? "Edit Task" : "Add New Task"}</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <form action="#" className="flex flex-wrap" onSubmit={handleSubmit(onSubmit)}>
                            <div className="w-full">
                                <div className="mb-2 block">
                                    <Label htmlFor="title" value="Title" />
                                </div>
                                <input defaultValue={formData.id} {...register("id")} type="hidden" />
                                <TextInput defaultValue={formData.title} id="title" type="text" {...register("title", { required: true, minLength: 6, maxLength: 10 })} />
                                {errors.title && <span className="text-red-500">{errors.title.message}</span>}
                            </div>
                            <div className="w-full mt-2">
                                <div className="mb-2 block">
                                    <Label htmlFor="description" value="Description" />
                                </div>
                                <Textarea defaultValue={formData.description} id="description" rows={4} {...register("description")} />
                                {errors.description && <span className="text-red-500">{errors.description.message}</span>}
                            </div>
                            <div className="w-2/3 mt-2">
                                <div className="pr-2">
                                    <div className="mb-2 block">
                                        <Label htmlFor="countries" value="Assign To" />
                                    </div>
                                    <Select defaultValue={formData.assignTo} id="countries" {...register("assignTo")}>
                                        <option disabled>Select Something</option>
                                        <option value="Person One">Person One</option>
                                        <option value="Person Tow">Person Tow</option>
                                        <option value="Person Three">Person Three</option>
                                        <option value="Person Four">Person Four</option>
                                    </Select>
                                    {errors.assignTo && <span className="text-red-500">{errors.assignTo.message}</span>}
                                </div>
                            </div>
                            <div className="w-1/3 mt-2">
                                <div className="mb-2 block">
                                    <Label htmlFor="countries" value="Priority" />
                                </div>
                                <Select defaultValue={formData.priority} id="countries" {...register("priority")}>
                                    <option disabled>Select Something</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </Select>
                                {errors.priority && <span className="text-red-500">{errors.priority.message}</span>}
                            </div>
                            <Button type="submit" className="mt-5">
                                {taskToEdit ? "Edit Task" : "Add Task"}
                            </Button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}