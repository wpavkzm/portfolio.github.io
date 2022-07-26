import React, { useState, useEffect } from "react";
import Project from "../components/Project";
import { useMediaQuery } from "react-responsive";

import IR1 from "../assets/semtle/HW1.PNG";
import IR2 from "../assets/semtle/HW2.PNG";
import IR3 from "../assets/semtle/HW3.PNG";
import IR4 from "../assets/semtle/IRcase.PNG";
import IR5 from "../assets/semtle/IR.PNG";

import vueticky1 from "../assets/vueticky/GHW1.PNG";
import vueticky2 from "../assets/vueticky/vueticky2.png";
import vueticky3 from "../assets/vueticky/vueticky3.png";

import ycde1 from "../assets/youcandoeat/main.jpg";
import ycde2 from "../assets/youcandoeat/sidebar.jpg";
import ycde3 from "../assets/youcandoeat/select.jpg";

function ProjectContainer() {
  const projects = [
    {
      id: 1,
      name: "[중기부] HW 개발 및 기능 구현 / 사업운영",
      info: `중기부 프로젝트 진행 내용에 포함되는 센서 개발 및 기능 구현,
      시험인증, 사업비 통계, 업체컨텍, 기타자료증빙 등의 업무 동시진행`,
      tag: ["EasyEDA", "2D CAD", "C/C++", "Atemel", "Visual Studio Code"],
      image: [IR1, IR2, IR3, IR4, IR5],
      url: "http://sbmi.iptime.org/",
      git: "https://github.com/semtlekkun/semtleProject-front",
      mode: "web",
      role: ["Embedded"],
    },

    {
      id: 2,
      name: "[국토부] HW 개발 및 기능구현 / SW 유지보수 및 기능추가",
      info: `국토부 프로젝트 진행 내용에 포함되는 센서 개발 및 기능구현,
      자사에서 보유중이던 유동인구 트래킹 센서 기능 추가(업그레이드) 및 개발된 센서와 데이터 융합`,
      tag: [
        "EasyEDA",
        "Python",
        "RaspberryPi4",
        "MySQL",
        "Visual Studio Code",
        "Mac OS && Terminal",
      ],
      image: [vueticky1, vueticky2, vueticky3],
      url: "https://vueticky-note-b08f1.web.app/",
      git: "https://github.com/gunwoongPark/Vueticky-Note",
      mode: "web",
      role: ["Embedded", "MySQLWorkbench"],
    },

    {
      id: 3,
      name: "[과기부] 데이터 가공/융합 및 사업운영",
      info: `과기부 프로젝트 진행 내용에 포함되는 센서 데이터 가공 및 융합
      시험인증, 사업비 통계, 실증, 기타자료증빙 등의 업무 동시진행`,
      tag: [
        "React",
        "Django",
        "Python",
        "MySQL",
        "Visual Studio Code",
        "Mac OS && Terminal",
      ],
      image: [ycde1, ycde2, ycde3],
      url: "https://watsin-3b4e3.web.app/",
      git: "https://github.com/HwangYoonSeong/You_can_do_EAT",
      mode: "app",
      role: ["Embedded", "MySQLWorkbench", "React"],
    },
  ];

  let [mode, setMode] = useState("");

  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  useEffect(() => {
    if (isPc) setMode("isPc");
    else if (isMobile) setMode("isMobile");
  }, [isMobile, isPc]);

  return (
    <>
      <Project projects={projects} mode={mode} />
    </>
  );
}

export default ProjectContainer;
