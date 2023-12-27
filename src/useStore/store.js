import { ref } from "vue";
import { defineStore } from "pinia";

export const News = defineStore("News", () => {
  const News = ref([
    {
      id: 1,
      vedio: "https://www.youtube.com/embed/ffk--mYzUM4?si=0z215wYA_xmYIhOG",
      title: " Абдуллох Домла-Дардингни Аллохга тўк!-Abdulloh Domla",
    },
    {
      id: 2,
      vedio: "https://www.youtube.com/embed/60GFQUtIG-A?si=c-pdgJvCvgAdQjoH",
      title: " Абдуллох Домла 2023-Сиз сабр қилаверинг!-Abdulloh Domla 2024 ",
    },
    {
      id: 3,
      vedio: "https://www.youtube.com/embed/gEMNhTZQwfE?si=OpdOiZqO4FV2KsLM",
      title:
        " Ҳаётдан сиқилган пайтингизда ешитинг! °Муфтий |нуриддин ҳожи домла",
    },
    {
      id: 4,
      vedio: "https://www.youtube.com/embed/-IHX02OuxTY?si=yAl0mvFMbHHZjxvo",
      title: "ХАДИЖА ОНАМИЗ ХАКИДА МУФТИЙ НУРИДДИН ХОЖИ ДОМЛА ХАЗРАТЛАРИ ",
    },
    {
      id: 5,
      vedio: "https://www.youtube.com/embed/ffk--mYzUM4?si=0z215wYA_xmYIhOG",
      title: " Абдуллох Домла-Дардингни Аллохга тўк!-Abdulloh Domla",
    },
    {
      id: 6,
      vedio: "https://www.youtube.com/embed/ffk--mYzUM4?si=0z215wYA_xmYIhOG",
      title: " Абдуллох Домла-Дардингни Аллохга тўк!-Abdulloh Domla",
    },
    {
      id: 7,
      vedio: "https://www.youtube.com/embed/ffk--mYzUM4?si=0z215wYA_xmYIhOG",
      title: " Абдуллох Домла-Дардингни Аллохга тўк!-Abdulloh Domla",
    },
    {
      id: 8,
      vedio: "https://www.youtube.com/embed/ffk--mYzUM4?si=0z215wYA_xmYIhOG",
      title: " Абдуллох Домла-Дардингни Аллохга тўк!-Abdulloh Domla",
    },
    {
      id: 9,
      vedio: "https://www.youtube.com/embed/ffk--mYzUM4?si=0z215wYA_xmYIhOG",
      title: " Абдуллох Домла-Дардингни Аллохга тўк!-Abdulloh Domla",
    },
    {
      id: 10,
      vedio: "https://www.youtube.com/embed/ffk--mYzUM4?si=0z215wYA_xmYIhOG",
      title: " Абдуллох Домла-Дардингни Аллохга тўк!-Abdulloh Domla",
    },
    {
      id: 11,
      vedio: "https://www.youtube.com/embed/ffk--mYzUM4?si=0z215wYA_xmYIhOG",
      title: " Абдуллох Домла-Дардингни Аллохга тўк!-Abdulloh Domla",
    },
    {
      id: 12,
      vedio: "https://www.youtube.com/embed/ffk--mYzUM4?si=0z215wYA_xmYIhOG",
      title: " Абдуллох Домла-Дардингни Аллохга тўк!-Abdulloh Domla",
    },
  ]);

  const Zakot = ref([
    {
      id: 1,
      vedio: "https://www.youtube.com/embed/0XNyBiofsUk?si=rOLEPMjugi-BrSz9",
      title: "ZAKOT QAYSI MOLDAN BERILADI | NURIDDIN DOMLA XOLIQNAZAROV",
    },
    {
      id: 2,
      vedio: "https://www.youtube.com/embed/OtiniaTbg-w?si=w6ULMCsne-xagk_6",
      title: "ABDULLOH DOMLA ZAKOT HAQIDA / ZAKOT NIMA ?",
    },
    {
      id: 3,
      vedio: "https://www.youtube.com/embed/In6uFjCc-do?si=sEo4_CHiQX-NW11B",
      title: "Zakot va ushr haqida ",
    },
    {
      id: 4,
      vedio: "https://www.youtube.com/embed/If8SwZEbOV8?si=B6qh13AbMtXuzspS",
      title:
        "Закот ва эхсон беришдан олдин яҳшилаб эшитиб олинг абдуллох домла марузалари",
    },
    {
      id: 5,
      vedio: "https://www.youtube.com/embed/OO1ocpP8I6w?si=75sHPoQd6NmHUZNa",
      title:
        "06. Zakot (Ramazon 2006) «Ruhiy tarbiya» | Закот (Рамазон 2006) «Руҳий тарбия»",
    },
    {
      id: 6,
      vedio: "https://www.youtube.com/embed/8IPeMN6IVEg?si=diWiZ-Ib-FJ2s8hD",
      title: "Shayx Muhammad Sodiq Muhammad Yusuf - ZAKOT",
    },
    {
      id: 7,
      vedio: "https://www.youtube.com/embed/EbZaKvhFJK8?si=bAw_0VUBXhRHIaqI",
      title:
        " BOY BÓLISHNI ISTASANGIZ BU ISHGA ODATLANING SHAYX MUHAMMAD SODIQ MUHAMMAD YUSUF MARUZALARI MARUZALAR",
    },
  ]);
  const HistoreImage = ref([
     {
      id:1,
      image:'https://s2-goods.ozstatic.by/2000/803/892/10/10892803_100.jpg'
     },
     {
      id:2,
      image:'https://s2-goods.ozstatic.by/2000/803/892/10/10892803_100.jpg'
     },
     {
      id:3,
      image:'https://s2-goods.ozstatic.by/2000/803/892/10/10892803_100.jpg'
     },
     {
      id:4,
      image:'https://s2-goods.ozstatic.by/2000/803/892/10/10892803_100.jpg'
     },
     {
      id:5,
      image:'https://s2-goods.ozstatic.by/2000/803/892/10/10892803_100.jpg'
     },
     {
      id:6,
      image:'https://s2-goods.ozstatic.by/2000/803/892/10/10892803_100.jpg'
     },

  ]);

  return { News, Zakot, HistoreImage };
});
