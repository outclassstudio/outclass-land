export const PROGRAM_LIST = [
  {
    id: 1,
    header: "상담 안내",
    description: `사주팔자를 보는 이들 중 어떤 이들은 인간의 운명이란 정해져 있으며 바꿀 수 없는 것이라는 말을 합니다. 하지만 실제로 임상에 들어가보면 같은 사주팔자라도 질적으로 전혀 다른 삶을 누리는 이들이 많습니다. 이같은 차이를 어떻게 설명해야할까요? \n\n‘성격이 곧 운명이다’\n\n고대 그리스의 한 현자가 남긴 이 말은 운명론에 대해 다시금 생각해보게 합니다. 그는 당대의 통념과 달리 운명은 정해져 있는 게 아니며 그 사람이 만들어온 습관과 성격에 따라 변화될 수 있는 것으로 보았습니다. 즉 운명은 필연성이 아니라 사람의 성격에 따라 전개되는 가능성의 영역인 것이지요. 운명을 이런 방식으로 이해하게 되면 사주해석의 가능성이 좀 더 폭넓어진다는 것을 알 수 있습니다.`,
    mainSentence:
      "저희 아웃클래스는 사주명리를 통한 나 자신에 대한 깊은 이해를 바탕으로 자신의 운명을 스스로 개척할 수 있도록 돕고자 합니다.",
    recommend: [
      "삶의 방향이 막막해서 고민이신 분",
      "삶의 방향이 막막해서 고민이신 분",
      "나의 성향과 성격에 대해 알아보고 싶은 분",
    ],
    reviews: [
      {
        id: 1,
        name: "한O목님",
        age: "30대 초반",
        comment:
          "중요한 선택을 앞두고 막막했던 것들이 정리가 되면서 좋은 선택을 할 수 있었습니다. 감사합니다.",
      },
      {
        id: 2,
        name: "이O규님",
        age: "30대 중반",
        comment:
          "앞으로의 삶에 대한 방향설정이 힘들었는데 삶을 더 멀리 보고 성장할 수 있을 것 같은 용기를 얻었습니다.",
      },
      {
        id: 3,
        name: "이O형님",
        age: "30대 후반",
        comment:
          "의욕없이 방황하는 시간을 보내기도 했지만 이제는 용기있게 새 삶을 살 수 있을 것 같아요",
      },
    ],
  },
];

export const RESERVATION_TIME = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
];

type ServiceData = {
  [key: string]: number;
};

type Services = {
  [key: string]: ServiceData;
};

export const PROGRAM_OPTIONS: Services = {
  chat: { decade: 25000, whole: 30000 },
  mail: { decade: 45000, whole: 50000 },
  online: { decade: 45000, whole: 50000 },
};

type KOROptionsData = {
  [key: string]: string;
};

type KOROptions = {
  [key: string]: KOROptionsData;
};

export const PROGRAM_OPTIONS_KOR: KOROptions = {
  chat: { decade: "채팅 / 10년 분석", whole: "채팅 / 평생 분석" },
  mail: { decade: "메일 / 10년 분석", whole: "메일 / 평생 분석" },
  online: {
    decade: "온라인 미팅 / 10년 분석",
    whole: "온라인 미팅 / 평생 분석",
  },
};
