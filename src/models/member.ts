
export enum OccupationSection {
    Founder = "Founder",
    Collaborators = "Collaborators",
    HDRStudents = "HDRStudents",
    HonorsStudent = "HonorsStudent",
}


export interface MemberOutputDto {
    id: string;
    name: string;
    occupation: OccupationSection;
    profileImage?: string;
    occupationSub?: string;
    orderNumber: number;
}


export const allMembers: MemberOutputDto[] = [
    {
        id: "1",
        name: "Dr. Chun Ouyang",
        occupation: OccupationSection.Founder,
        profileImage: "https://res.cloudinary.com/dcd56w8gc/image/upload/v1620301124/rhju6s6uoldcnxmw7c0o.jpg",
        occupationSub: "",
        orderNumber: 1,
    },
    {
        id: "2",
        name: "Dr. Catarina Moreira",
        occupation: OccupationSection.Founder,
        profileImage: "https://res.cloudinary.com/dcd56w8gc/image/upload/v1619535125/vtyukjmxpoy2afzfpzfj.png",
        occupationSub: "",
        orderNumber: 2,
    },
    {
        id: "3",
        name: "Dr. Renuka Sindhgatta",
        occupation: OccupationSection.Founder,
        profileImage: "https://res.cloudinary.com/dcd56w8gc/image/upload/v1621573588/begjin9xq99zcs3m89je.jpg",
        occupationSub: "",
        orderNumber: 3,
    },
    {
        id: "4",
        name: "A\Prof. Yue Xu.",
        occupation: OccupationSection.Collaborators,
        profileImage: "https://res.cloudinary.com/dcd56w8gc/image/upload/v1621573622/israd7mxvdxd5gbljesp.jpg",
        occupationSub: "",
        orderNumber: 1,
    },
    {
        id: "5",
        name: "Prof. Joaquim Jorge",
        occupation: OccupationSection.Collaborators,
        profileImage: "https://res.cloudinary.com/dcd56w8gc/image/upload/v1619535448/jvdkcyvgrqu5foyvxpd2.jpg",
        occupationSub: "",
        orderNumber: 2,
    },
    // {
    //     id: "6",
    //     name: "Prof. Will van der Aalst",
    //     occupation: OccupationSection.Collaborators,
    //     profileImage: "https://res.cloudinary.com/dcd56w8gc/image/upload/v1619535518/knaomursmwrmfqp4aiwj.jpg",
    //     occupationSub: "",
    //     orderNumber: 3,
    // },
    {
        id: "7",
        name: "Mythreyi Velmurugan",
        occupation: OccupationSection.HDRStudents,
        profileImage: "https://res.cloudinary.com/dcd56w8gc/image/upload/v1619535615/v2pxj7ommlm6a4uccuhp.jpg",
        occupationSub: "",
        orderNumber: 1,
    },
    {
        id: "8",
        name: "Yu-Liang (Leon) Cho",
        occupation: OccupationSection.HDRStudents,
        profileImage: "https://res.cloudinary.com/dcd56w8gc/image/upload/v1619535686/lolnxfe64mt8vydthdlk.jpg",
        occupationSub: "",
        orderNumber: 2,
    },
    {
        id: "9",
        name: "Peng (Kenny) Yu",
        occupation: OccupationSection.HDRStudents,
        profileImage: "https://res.cloudinary.com/dcd56w8gc/image/upload/v1619535769/cbyv9gnmzbzlc5hmoc3s.jpg",
        occupationSub: "",
        orderNumber: 3,
    },
    {
        id: "10",
        name: "Bemali Wickramanayake",
        occupation: OccupationSection.HDRStudents,
        profileImage: "https://res.cloudinary.com/dcd56w8gc/image/upload/v1619535852/efc2p3t0h1soojoksmdi.png",
        occupationSub: "",
        orderNumber: 4,
    },
    {
        id: "11",
        name: "Jia (Jenny) Wei",
        occupation: OccupationSection.HDRStudents,
        profileImage: "https://res.cloudinary.com/dcd56w8gc/image/upload/v1620277624/rx31uwskj5lh26vpf8ws.jpg",
        occupationSub: "",
        orderNumber: 5,
    },
    {
        id: "12",
        name: "Chihcheng (Richard) Hsieh",
        occupation: OccupationSection.HDRStudents,
        profileImage: "https://res.cloudinary.com/dcd56w8gc/image/upload/v1619954466/frip22rpmow3rmas33lg.jpg",
        occupationSub: "",
        orderNumber: 6,
    },
    {
        id: "13",
        name: "Zhipeng (Zippo) He",
        occupation: OccupationSection.HDRStudents,
        profileImage: "https://res.cloudinary.com/dcd56w8gc/image/upload/v1621732433/hb4j78tkbsewdqnhdvzw.jpg",
        occupationSub: "",
        orderNumber: 7,
    },

];
