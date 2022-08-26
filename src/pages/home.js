import { useState } from "react";
import { AutoComplete, Button, Layout, Modal, Select } from "antd";

import { PlusOutlined, UserOutlined } from "@ant-design/icons";

import {
    peopleData,
    initialInput,
    settingData,
} from "../components/peopleData";

import findConnections from "../components/findConnections";

import Logo from "../helper/logo";
import styles from "../styles/home.module.scss";

const { Header, Footer, Content } = Layout;
const { Option } = Select;

const HomePage = () => {
    const [firstPerson, setFirstPerson] = useState("");
    const [secondPerson, setSecondPerson] = useState("");
    const [displayResult, setDisplayResult] = useState("");
    const [isAddPeopleModalVisible, setIsAddPeopleModalVisible] =
        useState(false);
    const [newPerson, setNewPerson] = useState("");
    const [newPersonRelations, setNewPersonRelations] = useState("");

    const handleFirstPersonChange = (e) => {
        setFirstPerson(e);
    };
    const handleSecondPersonChange = (e) => {
        setSecondPerson(e);
        setDisplayResult("");
    };
    const handleNewPersonRelationsChange = (e) => {
        setNewPersonRelations(e);
    };

    const handleCheckButton = () => {
        let result = findConnections(firstPerson, secondPerson);
        setDisplayResult(
            result?.map((e, i) => {
                return <p key={i}>{e.join(" > ")}</p>;
            })
        );
    };
    const handleAddAPersonInputChange = (e) => {
        setNewPerson(e);
    };
    const handleAddAPersonOnSelect = (e) => {
        setNewPerson(e);
    };
    const handleAddNewPersonModalOnOK = () => {
        peopleData.nodes.push({ label: newPerson, value: newPerson });
        initialInput.push([newPerson, newPersonRelations]);
        settingData([newPerson, newPersonRelations]);
        setIsAddPeopleModalVisible(false);
    };

    return (
        <Layout className={styles.appContainer}>
            <Header className={styles.appContainer__header}>
                <h1 className={styles["appContainer__header--heading"]}>
                    <Logo />
                </h1>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => setIsAddPeopleModalVisible(true)}
                >
                    {" "}
                    Add People
                </Button>
            </Header>
            <Modal
                title="Add New Persons/Relations"
                visible={isAddPeopleModalVisible}
                onOk={handleAddNewPersonModalOnOK}
                onCancel={() => setIsAddPeopleModalVisible(false)}
            >
                <div>
                    <h5>Add :&nbsp;&nbsp;</h5>
                    <AutoComplete
                        style={{
                            width: 200,
                        }}
                        options={peopleData.nodes}
                        onSelect={handleAddAPersonOnSelect}
                        onChange={handleAddAPersonInputChange}
                        placeholder="Add a Person"
                        type="text"
                        prefix={<UserOutlined />}
                    />
                </div>
                <div>
                    <h5>is a &nbsp;&nbsp;</h5>
                    <Select defaultValue="Friend" disabled></Select>
                    &nbsp;of :&nbsp;&nbsp;
                    <Select
                        defaultValue="---Select---"
                        onChange={handleNewPersonRelationsChange}
                    >
                        {peopleData.nodes.map((node, index) => {
                            return (
                                <Option value={node.value} key={index + 1}>
                                    {node.value}
                                </Option>
                            );
                        })}
                    </Select>
                </div>
            </Modal>
            <Content className={styles.appContainer__content}>
                <div className={styles["appContainer__content--text"]}>
                    All people on average are six, or fewer, social connections
                    away from each other
                </div>
                <h1 className={styles["appContainer__content--uspTitle"]}>
                    Curious to know how people are connected to?
                </h1>
                <h3>Check Here :</h3>
                <div
                    className={
                        styles["appContainer__content--checkHereContainer"]
                    }
                >
                    <div
                        className={
                            styles["appContainer__content--dropdownContainer"]
                        }
                    >
                        <h4>
                            Select 1st Person :&nbsp;&nbsp;
                            <Select
                                defaultValue="---Select---"
                                onChange={handleFirstPersonChange}
                            >
                                {peopleData.nodes.map((node, index) => {
                                    return (
                                        <Option
                                            value={node.value}
                                            key={index + 1}
                                        >
                                            {node.value}
                                        </Option>
                                    );
                                })}
                            </Select>
                        </h4>
                        <h4>
                            Select 2nd Person :&nbsp;&nbsp;
                            <Select
                                defaultValue="---Select---"
                                onChange={handleSecondPersonChange}
                            >
                                {peopleData.nodes
                                    .filter(
                                        (node) => node.value !== firstPerson
                                    )
                                    .map((node, index) => {
                                        return (
                                            <Option
                                                value={node.value}
                                                key={index + 1}
                                            >
                                                {node.value}
                                            </Option>
                                        );
                                    })}
                            </Select>
                        </h4>
                    </div>
                    <Button
                        className={
                            styles[
                                "appContainer__content--checkHereContainerButton"
                            ]
                        }
                        onClick={handleCheckButton}
                    >
                        Check!
                    </Button>
                </div>
                {displayResult.length > 0 && (
                    <div
                        className={styles.resultHeading}
                    >{`${firstPerson} and ${secondPerson} are related as follows:`}</div>
                )}
                <div className={styles["appContainer__content--displayResult"]}>
                    {displayResult}
                </div>
            </Content>
            <Footer className={styles.appContainer__footer}> Atul ©2022</Footer>
        </Layout>
    );
};

export default HomePage;
