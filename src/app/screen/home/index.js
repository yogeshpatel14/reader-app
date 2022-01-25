import React, { lazy, useState } from "react";
import { Layout } from "antd";

const LeftMenu = lazy(() => import("../../components/leftMenu"));
const PdfReader = lazy(() => import("../../components/pdfReader"));

function Home() {
  const [selectedPath, setSelectedPath] = useState(null);
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftMenu
          getFilePath={(e) => {
            setSelectedPath(e);
          }}
        />
        <PdfReader filePath={selectedPath} />
      </Layout>
    </div>
  );
}

export default Home;
