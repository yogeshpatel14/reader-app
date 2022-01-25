import React, { useRef, useState, useCallback } from "react";
import { Layout, Menu } from "antd";
import { FileOutlined, CloudUploadOutlined } from "@ant-design/icons";
import LogoSmWhite from "../../assets/images/image/logo_sm_white.png";
import { CustomButton } from "../common/button";

const { Sider } = Layout;

/**
 * main
 * @param {*} props
 * @returns
 */
function LeftMenu(props) {
  const [listFile, setListFile] = useState([]);
  const [selectedKey, setSelectedKey] = useState([]);

  const inputFile = useRef(null);

  const btnSelectFileForUpload = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    const fsize = Math.round(file.size / 1024) / 1024;
    if (fsize > 100) {
      alert("File to large. Maximum  file size is 100 MB");
    } else {
      let arrFile = listFile;
      arrFile.push(file);
      setListFile(arrFile);
      setSelectedKey((arrFile.length - 1).toString());
      props.getFilePath(file);
    }
  }, []);

  const renderMenuItem = () => {
    return listFile.map((item, index) => (
      <Menu.Item key={index.toString()} icon={<FileOutlined color="#A070DC" />}>
        <strong>{item.name.replace(".pdf", "")}</strong>
        <small>Nam vel porta velit</small>
      </Menu.Item>
    ));
  };

  const btnItemClicke = ({ key }) => {
    setSelectedKey(key.toString());
    props.getFilePath(listFile[parseInt(key)]);
  };

  return (
    <Sider breakpoint="lg" collapsedWidth="0" className="leftMenu">
      <div className="logo">
        <img alt="" src={LogoSmWhite} />
      </div>
      <p className="p-file">Files</p>
      <Menu
        selectedKeys={[selectedKey]}
        onClick={btnItemClicke}
        theme="dark"
        mode="inline"
      >
        {renderMenuItem()}
      </Menu>
      <CustomButton
        title="Upload File"
        onClick={() => inputFile.current.click()}
        customstyle="btn-upload"
        isIcon={true}
        iconName={CloudUploadOutlined}
      />
      <input
        type="file"
        onChange={btnSelectFileForUpload}
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
        accept=".pdf"
      />
    </Sider>
  );
}

export default LeftMenu;
