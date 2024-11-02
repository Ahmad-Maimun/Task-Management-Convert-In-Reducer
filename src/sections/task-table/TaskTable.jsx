/* eslint-disable no-unused-vars */
import Container from "../../components/container";
import { Button, Table } from "flowbite-react";
import TaskItem from "./TaskItem";
import { ModalPopup } from "../../components/ModalPopup";
import { useState } from "react";
import { DeleteTasksModal } from "../../components/DeleteTasksModal";
import TaskTableHeader from "./TaskTableHeader";

function NoData() {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell colSpan={6} className="text-center">
                🥸No Data Found🥸
            </Table.Cell>
        </Table.Row>
    );
}

function TaskTable() {
    let [openModal, setOpenModal] = useState(false);
    let [openDeleteModal, setOpenDeleteModal] = useState(false);
    let [tasks, setTasks] = useState([]);
    let [searchText, setSearchText] = useState("");
    let createHandler = (item) => {
        let updateTasks = [...tasks, item];
        setTasks(updateTasks.reverse());
    };
    let editHandler = (data) => {
        setTasks(
            tasks.map((item) => {
                if (data.id === item.id) {
                    return data;
                } else {
                    return item;
                }
            })
        );
    };
    let deleteHandler = (id) => {
        setTasks(
            tasks.filter((item) => {
                return item.id != id;
            })
        );
    };
    let deleteTask = () => {
        setTasks([]);
    };
    let searchHandler = (text) => {
        setSearchText(text);
    };
    let updatedTasks = tasks.filter((item) => {
        return item.title.toLowerCase().includes(searchText.toLowerCase());
    });
    return (
        <Container className="mt-5">
            <div className="flex justify-end">
                <Button onClick={() => setOpenModal(true)} className="mr-2" color="success">
                    Add Task
                </Button>
                <Button color="failure" onClick={() => setOpenDeleteModal(true)}>
                    Clear Tasks
                </Button>
            </div>
            <div className="p-2 rounded-md border dark:border-gray-500 my-6">
                <TaskTableHeader onSearch={searchHandler} />
                <div className="overflow-x-auto">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>#</Table.HeadCell>
                            <Table.HeadCell>Title</Table.HeadCell>
                            <Table.HeadCell>Description</Table.HeadCell>
                            <Table.HeadCell>Assigned To</Table.HeadCell>
                            <Table.HeadCell>Priority</Table.HeadCell>
                            <Table.HeadCell>Action</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">{tasks.length == 0 ? <NoData /> : updatedTasks.map((item, index) => <TaskItem onDelete={deleteHandler} onEdit={editHandler} data={item} index={index} key={item.id} />)}</Table.Body>
                    </Table>
                </div>
            </div>
            <ModalPopup onCreate={createHandler} onOpen={openModal} onClose={() => setOpenModal(false)} />
            <DeleteTasksModal onOpenModal={openDeleteModal} onCloseModal={() => setOpenDeleteModal(false)} onDeleteModal={deleteTask} />
        </Container>
    );
}

export default TaskTable;