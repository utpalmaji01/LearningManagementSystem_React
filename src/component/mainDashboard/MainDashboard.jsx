import {
  Card,
  CardContent,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React, { Component } from "react";
import { MoreVert as MoreVertIcon } from "@material-ui/icons";
import PerticularCourceDetails from "../perticularCourceDetails/PerticularCourceDetails.jsx";
import "./mainDashboard.scss";
class MainDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      showPerticularCourceDetails: false,
      perticularCource: null,
    };
  }

  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  showDashboard = () => {
    this.setState({
      showPerticularCourceDetails: false,
    });
  };

  showPerticularCource = (cource) => {
    this.setState({
      showPerticularCourceDetails: true,
      perticularCource: cource,
    });
  };

  mainData = [
    {
      id: "60129c45fc13ae07bf000064",
      courceName: "Account Coordinator",
      students: [
        {
          sId: "cda317cccbb4ce3f4b53e3f96ad09758",
          sName: "Fanchon MacRitchie",
        },
        {
          sId: "dc0ea127491fedb359263a84c729cc10",
          sName: "Ivett Richford",
        },
        {
          sId: "dbcde2104eb27be6bdb24a1b10f2d6f7",
          sName: "Bord Harm",
        },
        {
          sId: "468490a20662f9d1554ea299bedb66cb",
          sName: "Shanna Colthard",
        },
        {
          sId: "650f6058d7916e978385706b8cbab00f",
          sName: "Ida Cuttin",
        },
        {
          sId: "bac51cba4f2db5bda9a69e4d4b172852",
          sName: "Modestine Fawdry",
        },
        {
          sId: "0dc4e392ced677a7b0aad7fec58d7ebc",
          sName: "Cull Craddock",
        },
        {
          sId: "4c05ec2793c70feb781370bc0f406e04",
          sName: "Nisse Handasyde",
        },
        {
          sId: "8b7e071c03b5b30e8a0921b69631b6ac",
          sName: "Marty Casa",
        },
        {
          sId: "10d5782f7ede0fc07b6c973206dc91b3",
          sName: "Lonnie Humfrey",
        },
        {
          sId: "e215ae2ffbe24230285346a7d18c09d5",
          sName: "Any Jordine",
        },
        {
          sId: "b235c072923d0ef9dca6b94d4bfd38cc",
          sName: "Yancey Maywood",
        },
        {
          sId: "bd87b764f720bcf8c33b5c09643995ae",
          sName: "Kimbell Conrart",
        },
        {
          sId: "a2fb681b0d958b3dcbe537cf7ff81002",
          sName: "Brnaby Reilinger",
        },
        {
          sId: "9c330e544d86745fad69fbe78cb1c0c7",
          sName: "Rance Risebarer",
        },
        {
          sId: "61107ba54852f57bcb7de7a9a095cc2e",
          sName: "Stefa Hodcroft",
        },
        {
          sId: "3cae2e3ac65cb133744d903172c71aa8",
          sName: "Tedra Batter",
        },
        {
          sId: "384e270dad9264aac841d316674971a2",
          sName: "Cesare Jickles",
        },
        {
          sId: "1b1daa5cab886aa76777d727f38c3d7f",
          sName: "Frederic Colyer",
        },
        {
          sId: "09f1bfd030f869e359674bf73d4d6dd5",
          sName: "Cirillo Maund",
        },
      ],
      mentors: [
        {
          mId: "a288a3f40f137e5aac76919625cfa376",
          mName: "El Maynell",
        },
        {
          mId: "9ae595535832b649dfc8dbce2884da73",
          mName: "Efren Rootes",
        },
        {
          mId: "4ead8f5e0360bd9950efe8f4df4df8fe",
          mName: "Aldous Karlqvist",
        },
        {
          mId: "93c7777591a6bdf2ce62caf59fab21b0",
          mName: "Cher Gosselin",
        },
        {
          mId: "ebe58e7ca493782e61d6ed2d789e4967",
          mName: "Gertrudis Matieu",
        },
        {
          mId: "3d283e116dc2d4dfc874fa45475da88a",
          mName: "Lucinda Grayston",
        },
      ],
    },
    {
      id: "60129c45fc13ae07bf000065",
      courceName: "Business Systems Development Analyst",
      students: [
        {
          sId: "779c370039b85b65705d4af664f7a71f",
          sName: "Elwin Orrick",
        },
        {
          sId: "f154b9fd6378c0dabaa4d1960df874b7",
          sName: "Vi Wedge",
        },
        {
          sId: "e3d1268c1999b4e6cab25de84cabeefd",
          sName: "Lydie Bourdas",
        },
        {
          sId: "fc6b04643ebae9ffc9053227d6e3001f",
          sName: "Christyna Birley",
        },
        {
          sId: "8848b2ae7831ad0374d4295c5486d978",
          sName: "Hailey Epdell",
        },
        {
          sId: "c2018b363434bf205c8d36c34ca26459",
          sName: "Purcell Fairfoull",
        },
        {
          sId: "214352cc205d2a50c005696a2403a516",
          sName: "Deedee Jurs",
        },
        {
          sId: "53a9d3271c8cc059d3b70d9735df09da",
          sName: "Lyell Dolder",
        },
        {
          sId: "7a2fc3439c9a77b63068e8156643f8a4",
          sName: "Kristan Kemmer",
        },
        {
          sId: "6768b938434211200668fe10faf7ab7b",
          sName: "Mercedes Tassell",
        },
        {
          sId: "c87a51d1c48f928495db50bb0b29c307",
          sName: "Odey Titheridge",
        },
        {
          sId: "52a5b896d4fae86fec8ef9ef5eed1559",
          sName: "Roman Denford",
        },
        {
          sId: "da326a2b87617923804a532f5b026163",
          sName: "Elvyn Cargo",
        },
        {
          sId: "98b1606578243952cd3c21003c97cd4e",
          sName: "Filip Smurthwaite",
        },
        {
          sId: "04f808436a26587d07bac46ddeb59ce2",
          sName: "Carlynn Gear",
        },
        {
          sId: "a976c2536c0ead3c4ffbe5afbd62153c",
          sName: "Noni Filyushkin",
        },
        {
          sId: "ea83acf9655a1aaeee10e2d0df0ff5a0",
          sName: "Harvey Hardie",
        },
        {
          sId: "005301700ac4a7430a954450ad39d6ba",
          sName: "Gunter Consadine",
        },
        {
          sId: "b508c5332792cab54bfe1cb674968ba3",
          sName: "Ev Siebert",
        },
        {
          sId: "9d3073c34830c536e42e91233309b1f7",
          sName: "Wolfgang Dovinson",
        },
      ],
      mentors: [
        {
          mId: "30af372af3773aaaa59e379db962cc7f",
          mName: "Lesly Marcos",
        },
        {
          mId: "d755192d07ed72abb49d3cade2a8eb7a",
          mName: "Thaddus Butten",
        },
        {
          mId: "eeedeeaa4d2d88e775f38239c2bc69b8",
          mName: "Rabi Rycroft",
        },
        {
          mId: "7bcb008db1bd5c6b7d9311e772a7302b",
          mName: "Lona Galler",
        },
        {
          mId: "2aea9b3ea73da1517ff51dcf2323680f",
          mName: "Fionnula Fridd",
        },
      ],
    },
    {
      id: "60129c45fc13ae07bf000066",
      courceName: "Food Chemist",
      students: [
        {
          sId: "1b53ca1ee2bf8a6f8a5c370930453660",
          sName: "Ferguson Gregoire",
        },
        {
          sId: "0fb94022c9452fd98b5d29939d2cb990",
          sName: "Joell Wyrill",
        },
        {
          sId: "e73f8ca6d561dff30c8713746c422366",
          sName: "Sonya Batty",
        },
        {
          sId: "958bf547ce41ea983bcd95868bcb7860",
          sName: "Lenci Hanhardt",
        },
        {
          sId: "de8dcd95371d8d3cbd91ca153cdc3f06",
          sName: "Philbert Dyson",
        },
        {
          sId: "fa2a372e74b4119a1b1d9703e77cc66a",
          sName: "Connor Abbyss",
        },
        {
          sId: "60ed2fea3f84dac983bfac790737acc1",
          sName: "Halie Closs",
        },
        {
          sId: "ef954b4494e7e1cf53b2b9413d961d09",
          sName: "Dalenna Korneichuk",
        },
        {
          sId: "b5e14b625596f2adac732d9e9a998f87",
          sName: "Alvie Gunter",
        },
        {
          sId: "d70db53d1664be38471020c2998426a9",
          sName: "Nanete Bullivent",
        },
        {
          sId: "874fb21530175c0e2c54544bbf0f66ee",
          sName: "Gunilla Ofer",
        },
        {
          sId: "f95759ebac2787278233158972c12431",
          sName: "Miquela Addis",
        },
        {
          sId: "c00e002f5336c5feee8adb7eaae108e3",
          sName: "Thomasin Pigdon",
        },
        {
          sId: "9e359e87c9ab6d67c8f23723b48d7a82",
          sName: "Elsie Fleay",
        },
        {
          sId: "f95a80cfc92f3050711ac120587c9107",
          sName: "Sherlock Cotty",
        },
        {
          sId: "d50a08175188862b47748c3ed3a2283e",
          sName: "Inigo Bartlosz",
        },
        {
          sId: "9de9eb642edaf23aedc49c4e02054757",
          sName: "Talbot Milverton",
        },
        {
          sId: "229abf14f27188782befdd9a46074169",
          sName: "Alene Natt",
        },
        {
          sId: "c4b80a32d67fe4d3e189c0af3957f551",
          sName: "Jan Patty",
        },
        {
          sId: "d97b34f3c8b2662d5a8ab463fdda5eaa",
          sName: "Reuven Fosh",
        },
      ],
      mentors: [
        {
          mId: "24974ca1ef5a3d78218444ed968c9742",
          mName: "Davida Didsbury",
        },
        {
          mId: "4581137cba1cfdf88b6611fc9680f3c8",
          mName: "Zak Avrahamoff",
        },
        {
          mId: "c87ab81df410cb23bfa3d821776619f2",
          mName: "Carrissa Snasel",
        },
        {
          mId: "d46b8315f8596a1f4f99ac2f14861340",
          mName: "Nels Ivchenko",
        },
        {
          mId: "98f4d043d8e23da2890b7d35d45e6aac",
          mName: "Page Han",
        },
        {
          mId: "b0211e33cba95529cbc1c751ffc2b241",
          mName: "Rania Shallcross",
        },
        {
          mId: "6e57a0b728d28f18355b6ee297134c7f",
          mName: "Sayre Clement",
        },
      ],
    },
    {
      id: "60129c45fc13ae07bf000067",
      courceName: "Graphic Designer",
      students: [
        {
          sId: "b4a93e261b204024e0d08ef24523f0b9",
          sName: "Julie Sille",
        },
        {
          sId: "2f56047814e17301c4405cddc5584ed7",
          sName: "Huntington Brompton",
        },
        {
          sId: "b049eae51f9bc75172fbc9d46de16dfc",
          sName: "Adelina Kingcote",
        },
        {
          sId: "88d95f81f8688a9244b0cea0b048b5d5",
          sName: "Gayler Bartol",
        },
        {
          sId: "869f5331769a49f820660db367dd12be",
          sName: "Ida Maliffe",
        },
        {
          sId: "ef1cecfe7d858396767dbdfd5561f2b3",
          sName: "Lurline Vautrey",
        },
        {
          sId: "abf80932ae1bf3312b7488a1c3e418f0",
          sName: "Veronike Shurey",
        },
        {
          sId: "499329a83ba125ff7a45d7b89379f864",
          sName: "Stanly Picker",
        },
        {
          sId: "6633c08ba0d2ad0d4e2df98ff06a1f62",
          sName: "Deni Millmore",
        },
        {
          sId: "214e493ebca176c7ca0e3b3c511b6385",
          sName: "Heddie Leasor",
        },
        {
          sId: "8816fb6be769bd417da30dc759388fad",
          sName: "Eve Berthon",
        },
        {
          sId: "f8de71c3a4626b9fe42d5e91521dcdd4",
          sName: "Andrew Pentin",
        },
        {
          sId: "62fbcd5c860c96e186b1743adadd73be",
          sName: "Seward Duddan",
        },
        {
          sId: "8b41f87ddfc3941350f6b2ce6419e540",
          sName: "Piotr Scimoni",
        },
        {
          sId: "53b7b307fedaccad8fc0808e85de91eb",
          sName: "Aldon Millins",
        },
        {
          sId: "f56c43c43433171cb94ac35a4d7554e6",
          sName: "Lotte Shadbolt",
        },
        {
          sId: "3e38b05765a0ace07541b39805b16985",
          sName: "Mac Filppetti",
        },
        {
          sId: "3bcaa3dce5fe9d3b1b7ffc9913db7b55",
          sName: "Morley Lanfere",
        },
        {
          sId: "bb1f0da92624af5713736dc3cd50defe",
          sName: "Boot Swinyard",
        },
        {
          sId: "280dee079a499e905d35cae8fcf01ffb",
          sName: "Falito Gawler",
        },
      ],
      mentors: [
        {
          mId: "118c567b4a8407701e1d1beeb668138b",
          mName: "Cal Kiffin",
        },
        {
          mId: "82378e91a2d0281f66fccd9ce220b4fd",
          mName: "Cynthia Everson",
        },
        {
          mId: "25ab100c9e9f588a6ff5f0882254c750",
          mName: "Bartholomeus Venart",
        },
        {
          mId: "50e42cf6e3026c51a7f9f057afa8543f",
          mName: "Morgana Mintoff",
        },
        {
          mId: "b92888b4efc85f9dcfe23ebc46f4e3e9",
          mName: "Alex Cozins",
        },
        {
          mId: "6ac0fd2c3b5d4cf297781250ad6a329b",
          mName: "Damaris Moores",
        },
        {
          mId: "aa81930ae38a40273dda99d1a552b024",
          mName: "Junia Holdron",
        },
      ],
    },
    {
      id: "60129c45fc13ae07bf000068",
      courceName: "Health Coach I",
      students: [
        {
          sId: "0ee59821f1ef675b15f2b46035b248c1",
          sName: "Gardy Stroban",
        },
        {
          sId: "d6ebe40b5bae633de7ce1ea64a0c27f6",
          sName: "Nichole Thurgood",
        },
        {
          sId: "e1b66a938c824b86046d29ecd0658001",
          sName: "Fanya Eatherton",
        },
        {
          sId: "f2d31271955f0d301e22ab94835ec5fb",
          sName: "Michail Brumby",
        },
        {
          sId: "6bca60830c8ffe95763911b956bb78c2",
          sName: "Aron Sweetland",
        },
        {
          sId: "ddad49b4287d74302b21392f3ce34b11",
          sName: "Cariotta Wiper",
        },
        {
          sId: "30d8a9b40f09e372397866865ed513c5",
          sName: "Carlee Bilfoot",
        },
        {
          sId: "1ab5ad07a35a224a343c739dea468f41",
          sName: "Almeda Showl",
        },
        {
          sId: "1c29c4b8fbc27496decaf14ca42f0e8f",
          sName: "Terrill Brushfield",
        },
        {
          sId: "a2d7c853d029d3521bbe35b715f66ae4",
          sName: "Constantia Renol",
        },
        {
          sId: "93eaca33ea4ec58f3455baf43bededc6",
          sName: "Osmond Vynarde",
        },
        {
          sId: "c8f7a365d973ea4b7a5c0ec9af61fbd5",
          sName: "Dolley Angelini",
        },
        {
          sId: "6a1b74cd659254ded94f01c5080617cd",
          sName: "Crosby Reinhard",
        },
        {
          sId: "caf057260d1926275ead64fcd2b6396f",
          sName: "Taffy Secret",
        },
        {
          sId: "4ec539a7ca93632651dc5917ca39c841",
          sName: "Dalis Shippam",
        },
        {
          sId: "7180bb870481361b88a41e3269b5581b",
          sName: "Ellary Spinney",
        },
        {
          sId: "a91cbb317e087ceb3d0c6bbc537671d6",
          sName: "Elaina Gleadhell",
        },
        {
          sId: "fda7bc315635e50497ba2aef806b0666",
          sName: "Teodoor Curle",
        },
        {
          sId: "fe930677a8385b3c73238935fff95242",
          sName: "Griffie Mulvihill",
        },
        {
          sId: "86f9b62836d8f6d2e226438008445cd7",
          sName: "Kimmie Pales",
        },
      ],
      mentors: [
        {
          mId: "413c569c6c431bd3035233eac967fec3",
          mName: "Alia Roxbee",
        },
        {
          mId: "3b52d82d30bd3202cd25d4044d4dfc0d",
          mName: "Valencia Stedson",
        },
        {
          mId: "4a37a17e4dc0b252d9f6e4e57ec04796",
          mName: "Jillane Golagley",
        },
        {
          mId: "dd8c9ce2cb87c91aa5e97aaf0cc71fc0",
          mName: "Gisella McFfaden",
        },
        {
          mId: "7f0204d2f74d235c4a7f4b4f3056f876",
          mName: "Milissent Shovell",
        },
        {
          mId: "1f6a75017d741817363526e216136498",
          mName: "Gilberto Assel",
        },
      ],
    },
    {
      id: "60129c45fc13ae07bf000069",
      courceName: "Civil Engineer",
      students: [
        {
          sId: "d954cb67825516a752684c849d47afb2",
          sName: "Garwin Pickavant",
        },
        {
          sId: "e0cc3d5b2880a1c139b1f26057c914ad",
          sName: "Caron Sterley",
        },
        {
          sId: "aad2c15bb83417b02df2c862d9695b17",
          sName: "Latisha Newlands",
        },
        {
          sId: "a549dc42e30363a89830fe754ee0e805",
          sName: "Randa Camelia",
        },
        {
          sId: "88a06a4986dadbe3ed7fd277d7ec48a0",
          sName: "Myca Colvie",
        },
        {
          sId: "8ccbc27f5c800d33e31b5cfacd24720f",
          sName: "Shanna Schmidt",
        },
        {
          sId: "362b4856c0feb611280d4a691241aae9",
          sName: "Ashby Wickwarth",
        },
        {
          sId: "6e9b0cd40b942c3642572710b8d13cae",
          sName: "Baldwin Foyster",
        },
        {
          sId: "8aebbbc8ca4a3e55d57aba922e727113",
          sName: "Demetra Riddick",
        },
        {
          sId: "171260dc85597a63a07f4bba4e7798f6",
          sName: "Koressa Crumbie",
        },
        {
          sId: "1b5e54be5f756e7c97e3f5e202481e05",
          sName: "Carilyn Castelain",
        },
        {
          sId: "5a00ba631aa79e21b62bd329e8e4d027",
          sName: "Kaja Buncombe",
        },
        {
          sId: "3650ed2f4b00019e243ae906aa63b655",
          sName: "Millie Corps",
        },
        {
          sId: "09f3a609ca7ac339b01de211ad1723e6",
          sName: "Roanne Hostan",
        },
        {
          sId: "51738dd982b127a072b2a5b3780afc0e",
          sName: "Ursula Marriner",
        },
        {
          sId: "60423932fa556ddd833f7ebed7a35fdd",
          sName: "Donnamarie Le Franc",
        },
        {
          sId: "a1b39aef710ec58c6a76cd3a54dcfc62",
          sName: "Codie Cushworth",
        },
        {
          sId: "f0c4286f3c81afd10fc6b25e3ff12872",
          sName: "Marita Syson",
        },
        {
          sId: "b990e21cbe2b4b29d043e777cde83af2",
          sName: "Eugenio Drayn",
        },
        {
          sId: "a13378197dd4dbf3586be949634ebe54",
          sName: "Leonanie Morford",
        },
      ],
      mentors: [
        {
          mId: "58950fab6031b61264c877995b109443",
          mName: "Katherine Joburn",
        },
        {
          mId: "54706e4904caaf4ff40b8b8ffde488b5",
          mName: "Kenton Verbrugge",
        },
        {
          mId: "bf9057e3d3d24d495f035d837d97cfed",
          mName: "Marlowe Cicchinelli",
        },
        {
          mId: "b0b52f465f8d9a320134c4f5f18391e0",
          mName: "Daryn Ewebank",
        },
        {
          mId: "96e0180066382a97643f1522233414e7",
          mName: "Wyn Smorthwaite",
        },
      ],
    },
    {
      id: "60129c45fc13ae07bf00006a",
      courceName: "Financial Analyst",
      students: [
        {
          sId: "3778956dce0389234f0904b8b0e8d572",
          sName: "Brandyn Ghelardoni",
        },
        {
          sId: "34b2abde73b4d2b3b844c09c39d85b8c",
          sName: "Nessie Gallaccio",
        },
        {
          sId: "3581b2abf1f47bbb48f27a974cd52f48",
          sName: "Hamid Mouse",
        },
        {
          sId: "f996b6433eb0c39719589017ee645121",
          sName: "Andrej Lieber",
        },
        {
          sId: "52b7276271238eee8763867243f9063c",
          sName: "Jan Bastide",
        },
        {
          sId: "6c363203b71c3b3fee0c6c405eb510d6",
          sName: "Jeannette Giacomozzo",
        },
        {
          sId: "31da90f60ba21e6e554fb1509cd812e0",
          sName: "Gaile Krol",
        },
        {
          sId: "254ef55eb08497347d9267069c428ed5",
          sName: "Iorgos Pietroni",
        },
        {
          sId: "fea139611a1b08bf2ea725c42b004be2",
          sName: "Basia Splevins",
        },
        {
          sId: "5ffb6966725fd479fda3b71d04bb05ac",
          sName: "Constanta Haselup",
        },
        {
          sId: "91b7aac614ab9f5f2253bba768b0f392",
          sName: "Kass January",
        },
        {
          sId: "dc00fe5bde4ddf9c01806262eb5dedf5",
          sName: "Gwenneth Bampton",
        },
        {
          sId: "e5b1563aa29d9a10682c9581c0338a92",
          sName: "Cristin Kynaston",
        },
        {
          sId: "4ecfef85d2a779b43cd8c9877c5ecc06",
          sName: "Wash Bashford",
        },
        {
          sId: "b2192ff63f5b93d53017cc0545e8ac8c",
          sName: "Charlene Wixey",
        },
        {
          sId: "e401d735f8daa0d209d7997b8f602b44",
          sName: "Broddy Waplinton",
        },
        {
          sId: "83fe7cb241a5722f0a1d40d760a6c248",
          sName: "Pren Goodband",
        },
        {
          sId: "caddef09022ab2f6c38ae55b55c2bf86",
          sName: "Roosevelt Keneleyside",
        },
        {
          sId: "aadb125c267d7ab80db799e54fe2b59f",
          sName: "Louie Di Francecshi",
        },
        {
          sId: "11da3404abb26e55b6964bc790eb089f",
          sName: "Evangeline Vivers",
        },
      ],
      mentors: [
        {
          mId: "47500dc571120b035c2d494a76710b82",
          mName: "Torre Pawson",
        },
        {
          mId: "6b8bcd3b959b57591d6494fb71f58be0",
          mName: "Chevalier Willshire",
        },
        {
          mId: "37bbc7099e6597c4000fe9bd7fb003ca",
          mName: "Archie Adamek",
        },
        {
          mId: "ab3303cb5da0a4f9caa8f44345aa797f",
          mName: "Farrand Dinsdale",
        },
        {
          mId: "c72efe12185f01b7c70e1d0be507a9d9",
          mName: "Jessie Enochsson",
        },
      ],
    },
    {
      id: "60129c45fc13ae07bf00006b",
      courceName: "Computer Systems Analyst I",
      students: [
        {
          sId: "4d7b9f14d080319d140f826877651146",
          sName: "Ellwood Dandie",
        },
        {
          sId: "766ff0346e8b171b4e498dcd729ee237",
          sName: "Madelaine Pareman",
        },
        {
          sId: "789bfda89dece21408b2d0e6cff5d1be",
          sName: "Rowan Agent",
        },
        {
          sId: "ec28914c7383debf4ab48cde791e57e4",
          sName: "Cris Emanueli",
        },
        {
          sId: "5be824030083d61bd837878a207f5d72",
          sName: "Dyan Blades",
        },
        {
          sId: "47ee7b36752cdf3efac7561e484dcf6b",
          sName: "Fields Ayers",
        },
        {
          sId: "8ce189b722dfe53054e5644456a3fd05",
          sName: "Patrizius Schwier",
        },
        {
          sId: "a2ad348aa0aa2e284703ef516b52606f",
          sName: "Orbadiah Yarr",
        },
        {
          sId: "5e8708e6899b780f70135066829d6c81",
          sName: "Lane Labrum",
        },
        {
          sId: "0aa18670c5f214a8364623884d73db56",
          sName: "Harman Khotler",
        },
        {
          sId: "1c58cb306ff68684dd857f56034e78c8",
          sName: "Zedekiah Lanigan",
        },
        {
          sId: "47f2173818f74eed9f6e514ec08a3d6e",
          sName: "Daryle Phillipps",
        },
        {
          sId: "cc5a21f5630111afea57d7be103f5856",
          sName: "Kariotta Bailie",
        },
        {
          sId: "7f8ac9fce024db0483a1b64f0df6e44d",
          sName: "Benoite Michel",
        },
        {
          sId: "405cdb15744cc2f6fb8d653c07158c68",
          sName: "Elsy Tomkinson",
        },
        {
          sId: "2185deaae98e67486682e99e4ca8f3e2",
          sName: "Romain Marple",
        },
        {
          sId: "85e4356138a97fad9977092ac342f8a9",
          sName: "Isidoro Bierman",
        },
        {
          sId: "0557aa620beda76558ff6b5b04f3ecc2",
          sName: "Hasty Baldocci",
        },
        {
          sId: "67124af9c576f3a2149a4ad7e233032b",
          sName: "Herc Heavy",
        },
        {
          sId: "1d2c1a8e1075dcb71fbe81b0fa6b86ac",
          sName: "Filide Agate",
        },
      ],
      mentors: [
        {
          mId: "57fb5e2a0ade816bd1eef096aedbe85a",
          mName: "Demeter Meiner",
        },
        {
          mId: "c53233a9cd0380961513e9c3cec49635",
          mName: "Janek Sleightholm",
        },
        {
          mId: "7c54ef8036ad8fa343efa69254e32fac",
          mName: "Sibella Husk",
        },
        {
          mId: "faaee9f3d0ccdcb84cbbff444b34c9d9",
          mName: "Loni Shimoni",
        },
        {
          mId: "452be93fb44a41bfd20e5a1fdb9ed343",
          mName: "Alexia Napoli",
        },
        {
          mId: "c9c6ba8a6a7f5855628282ba64de3c67",
          mName: "Tulley Lipmann",
        },
        {
          mId: "f6507e03e4c59a6934912af39ef752cc",
          mName: "Loydie Dyster",
        },
      ],
    },
    {
      id: "60129c45fc13ae07bf00006c",
      courceName: "Research Associate",
      students: [
        {
          sId: "4ff6ea1b97d9d34d9ded1b2ed4f8617a",
          sName: "Leilah Menichino",
        },
        {
          sId: "41b0bf1cdbdb2cb925929387c76edae1",
          sName: "Stafani Stainton",
        },
        {
          sId: "7d53e48c374812ff857ec6bc1f00283e",
          sName: "Nariko Pindar",
        },
        {
          sId: "90774f283fedd4385971b2861e5d1a33",
          sName: "Dierdre McMorran",
        },
        {
          sId: "056fe63e06f02293483d183d7bdb74c6",
          sName: "Clementine Lissett",
        },
        {
          sId: "918ae5733b6f235731516b993a53cc4a",
          sName: "Gery Morecombe",
        },
        {
          sId: "229d4cda14529aeaca8e03e84ec0178c",
          sName: "Rubi Mungham",
        },
        {
          sId: "db55b98ddf0b8a62d8b071df6ab98b4c",
          sName: "Brandais Chritchlow",
        },
        {
          sId: "36aa0938c69ab1a8bd3565f9ccdb48e1",
          sName: "Locke Heisham",
        },
        {
          sId: "fd6ebd0e2deed572374bba6aaba8dcd4",
          sName: "Cathie Casterton",
        },
        {
          sId: "f1947c662722ba8295d97ec55fe84915",
          sName: "Ynez Brandsen",
        },
        {
          sId: "dc09e4a574386470601fb6739f6ad24a",
          sName: "Gertie Hawkyens",
        },
        {
          sId: "95334e596e1a142fcf2b9b94c82a560a",
          sName: "Law Ryam",
        },
        {
          sId: "66f3a01afe45834bde8d51054e5a61b1",
          sName: "Minetta Crehan",
        },
        {
          sId: "5ce49e5a38c76f54331e06a3b4007765",
          sName: "Lil Loveguard",
        },
        {
          sId: "7fc5d5841d075ad9d3a7962b5b3bc5bf",
          sName: "Eli Tebbitt",
        },
        {
          sId: "3317d66cef698f598eb3308ab7010dd7",
          sName: "Henderson Jedrzaszkiewicz",
        },
        {
          sId: "3b9acb6909bcf8a878046b1d1fc3868f",
          sName: "Ben Balch",
        },
        {
          sId: "fefd7bbac7c4999dbbc1c4df344a1df2",
          sName: "Stearn Rawlings",
        },
        {
          sId: "904d81fe884c420b8900f3f6c9da247a",
          sName: "Lem O'Brogane",
        },
      ],
      mentors: [
        {
          mId: "1c5058a0ab4d0ee7b04ebb33714926cf",
          mName: "Stephanus Gowanson",
        },
        {
          mId: "221559baa8681aeb69dfaf5750c417d3",
          mName: "Caresse Pays",
        },
        {
          mId: "f0d3d3052c3ac44e4851403d256c679d",
          mName: "Melva Ruggieri",
        },
      ],
    },
    {
      id: "60129c45fc13ae07bf00006d",
      courceName: "Human Resources Assistant IV",
      students: [
        {
          sId: "6cbc3a556b676535d8ffc5b98c4c0557",
          sName: "Geoffrey Luter",
        },
        {
          sId: "4f9f04129d44d626b59c5fd5cf1fac13",
          sName: "Gilligan Jenman",
        },
        {
          sId: "022164220468aab3d7f52ea56228d8ea",
          sName: "Leroi De La Salle",
        },
        {
          sId: "1112e4be529c85e98cdf367e0b3de99e",
          sName: "Kirby Windham",
        },
        {
          sId: "215b85955b1fbf312a98300b0d301011",
          sName: "Frayda Pashby",
        },
        {
          sId: "8f6341d09b1d8b37e713f64b11e28281",
          sName: "Jacqui Gallgher",
        },
        {
          sId: "5107f327d540b16aac385b82368b4c42",
          sName: "Janek Stede",
        },
        {
          sId: "e4bf7322ea94eb1af5bd98e36177c5c6",
          sName: "Gordan Deegin",
        },
        {
          sId: "1f8909380e7d3f4166242af61e1e2a34",
          sName: "Avrit McGonigle",
        },
        {
          sId: "03ba5d04522a3f1aefb47ad906712300",
          sName: "Gilly Klais",
        },
        {
          sId: "674553f4fd931921733aa0f5113e6ffb",
          sName: "Garrot Tumelty",
        },
        {
          sId: "7be10b66a0d987ab0f1dd93231a1d29c",
          sName: "Brewer Sunnex",
        },
        {
          sId: "26d37edefcb395227f5fbfb418954790",
          sName: "Rosaleen Jencey",
        },
        {
          sId: "ff1317a12782262f5451ad5d4ce70f6c",
          sName: "Patrice Whereat",
        },
        {
          sId: "e9327c9f319a4e1579fd7a85e5be8670",
          sName: "Jameson Bonde",
        },
        {
          sId: "9afcc6ec76aabbac06144f8b9684580b",
          sName: "Mordecai Writtle",
        },
        {
          sId: "bd348373a12d5d27146c8b310b71ebe0",
          sName: "Lanna Atger",
        },
        {
          sId: "fc2215f3e2af657ef7fa35006f9a75ec",
          sName: "Analise Sarre",
        },
        {
          sId: "2c116f9b658586e03e5a5e2c5d04c6cf",
          sName: "Ivie Place",
        },
        {
          sId: "74a35d471c3433d24deb0f3d498d9e10",
          sName: "Aymer Priestman",
        },
      ],
      mentors: [
        {
          mId: "c4554f1230409c746859324eb56453fa",
          mName: "Garvey Nehlsen",
        },
        {
          mId: "d499e2f81a64feb20c14fd5ae856da5a",
          mName: "Conroy Cockroft",
        },
        {
          mId: "dae11aa123cde0b8679be81f154ac868",
          mName: "Dale Flockhart",
        },
        {
          mId: "03d6cadf7584790172263143a3e5b70f",
          mName: "Tully Robins",
        },
        {
          mId: "e7e35cf9f35c986d45c1c353e168d254",
          mName: "Courtnay Bitterton",
        },
      ],
    },
  ];
  render() {
    return (
      <div className="main-dashboard-container">
        {this.state.showPerticularCourceDetails ? (
          <>
            {this.state.perticularCource !== null &&
              this.state.perticularCource !== undefined && (
                <PerticularCourceDetails
                  perticularCource={this.state.perticularCource}
                  showDashboard={this.showDashboard}
                />
              )}
            {/* <PerticularCourceDetails
              perticularCource={this.state.perticularCource}
              showDashboard={this.showDashboard}
            /> */}
          </>
        ) : (
          <>
            <Typography
              variant="body1"
              className="main-dashboard-container-header"
            >
              DASHBOARD DETAILS
            </Typography>
            <div className="all-cource-details">
              {this.mainData.map((eachData) => (
                <Card
                  key={eachData.id}
                  // onClick={() => this.showPerticularCource(eachData)}
                  className="each-cource"
                >
                  <CardContent className="each-cource-contant">
                    <div className="cource-title-action">
                      <Typography
                        variant="body2"
                        className="cource-title"
                        onClick={() => this.showPerticularCource(eachData)}
                      >
                        {eachData.courceName}
                      </Typography>
                      <IconButton
                        aria-controls="cource-menu"
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        className="cource-action-button"
                      >
                        <MoreVertIcon fontSize="small" />
                      </IconButton>
                      <Menu
                        id="cource-menu"
                        elevation={0}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                      >
                        <MenuItem dense onClick={this.handleClose}>
                          Edit
                        </MenuItem>
                        <MenuItem dense onClick={this.handleClose}>
                          Delete
                        </MenuItem>
                      </Menu>
                    </div>
                    <div
                      className="cource-student-mentor"
                      onClick={() => this.showPerticularCource(eachData)}
                    >
                      <div className="cource-student">
                        <Typography variant="body1">
                          {eachData.students.length}
                        </Typography>
                        <Typography variant="caption">Student</Typography>
                      </div>
                      <div className="cource-mentor">
                        <Typography variant="body1">
                          {eachData.mentors.length}
                        </Typography>
                        <Typography variant="caption">Mentors</Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default MainDashboard;
