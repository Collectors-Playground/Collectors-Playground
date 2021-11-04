import * as types from '../constants/actionTypes';
import {
  dashboardStateInt,
  dashboardAction,
  portfolioInt,
} from '../../Types/interfaces';

const dashboardState: dashboardStateInt = {
  portfolioList: [
    {
      name: 'Glaring Cat',
      boughtPrice: 100,
      sellPrice: 200,
      image:
        'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg',
      description:
        'cat, (Felis catus), also called house cat or domestic cat, domesticated member of the family Felidae, order Carnivora, and the smallest member of that family. Like all felids, domestic cats are characterized by supple low-slung bodies, finely molded heads, long tails that aid in balance, and specialized teeth and claws that adapt them admirably to a life of active hunting. Cats possess other features of their wild relatives in being basically carnivorous, remarkably agile and powerful, and finely coordinated in movement.',
    },
    {
      name: 'Fluffy Cat',
      boughtPrice: 1000,
      sellPrice: 300,
      image:
        'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
      description:
        'It is noteworthy that the ancestors of the other common household pet, the dog, were social animals that lived together in packs in which there was subordination to a leader, and the dog has readily transferred its allegiance from pack leader to human master. The cat, however, has not yielded as readily to subjugation. Consequently, the house cat is able to revert to complete self-reliance more quickly and more successfully than most domesticated dogs. For an account of the relationship of the family of cats to other carnivores, see carnivore.',
    },
    {
      name: 'Cutie Cat',
      boughtPrice: 1000,
      sellPrice: 400,
      image:
        'https://images.newscientist.com/wp-content/uploads/2021/04/27105841/gettyimages-955480082_web.jpg',
      description:
        'The earliest known association between cats and humans dates possibly as far back as the origins of agriculture in the Middle East, about 9,500 years ago. A cat skeleton accompanying that of a human dated to that time was discovered in southern Cyprus. Although some sources note that this finding suggests that cats had undergone some degree of domestication in that location, other sources (citing evidence that the cat genome did not differ that much from that of the African wildcat during this period) argue that cats may have domesticated themselves by choosing to live in human-altered landscapes. Fossil evidence found in China dating to approximately 5,300 years ago revealed that cats similar in size to modern domestic cats fed on small grain-eating animals, such as rodents, and millet in agricultural settings. Although research suggests that these cats were actually leopard cats (Prionailurus bengalensis), which were replaced by modern domestic cats (F. catus) before 3000 BCE, this discovery suggests that humans allowed cats to hunt mice and other rodents that threatened grain stores and possibly fed the cats or allowed them to consume leftover food.',
    },
  ],
  currentNFT: {
    name: 'Glaring Cat',
    image:
      'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg',
    description:
      'cat, (Felis catus), also called house cat or domestic cat, domesticated member of the family Felidae, order Carnivora, and the smallest member of that family. Like all felids, domestic cats are characterized by supple low-slung bodies, finely molded heads, long tails that aid in balance, and specialized teeth and claws that adapt them admirably to a life of active hunting. Cats possess other features of their wild relatives in being basically carnivorous, remarkably agile and powerful, and finely coordinated in movement.',
  },
  balance: 500,
  leaderboard: [
    { username: '28 Diff', balance: 300 },
    { username: 'Brian Kim', balance: 200 },
    { username: 'West Islip', balance: 100 },
  ],
  NFTList: [
    // {
    //   name: 'SuperCat',
    //   description: 'A really super cat',
    //   price: 1,
    //   image: '',
    //   contract_name: '',
    //   id: 1,
    //   token_id: '12',
    // },
    // {
    //   name: 'SuperCat2',
    //   description: 'A really super cat2',
    //   price: 2,
    //   image: '',
    //   contract_name: '',
    //   id: 1,
    //   token_id: '12',
    // },
    // {
    //   name: 'SuperCat3',
    //   description: 'A really super cat3',
    //   price: 3,
    //   image: '',
    //   contract_name: '',
    //   id: 1,
    //   token_id: '12',
    // },
    // {
    //   name: 'SuperCat4',
    //   description: 'A really super cat4',
    //   price: 4,
    //   image: '',
    //   contract_name: '',
    //   id: 1,
    //   token_id: '12',
    // },
    // {
    //   name: 'SuperCat5',
    //   description: 'A really super cat5',
    //   price: 500,
    //   image: '',
    //   contract_name: '',
    //   id: 1,
    //   token_id: '12',
    // },
  ],
  NFTToBuy: {
    name: '',
    description: '',
    price: 0,
    image: '',
    contract_name: '',
    id: 1,
    token_id: '',
  },
};

const dashboardReducer = (state = dashboardState, action: dashboardAction) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case types.POPULATE_PORTFOLIO:
      break;
    case types.ADD_TO_PORTFOLIO:
      const { portfolioList } = stateCopy;
      console.log(action.payload);

      portfolioList.push({
        name: action.payload.name,
        boughtPrice: action.payload.price,
        sellPrice: action.payload.price,
        image: action.payload.image,
        description: action.payload.description,
      });
      return {
        ...state,
        portfolioList,
      };
    case types.SELL_FROM_PORTFOLIO:
      const NFTtoSell = action.payload;
      const currentPortfolioList: portfolioInt[] = stateCopy.portfolioList;
      let currentBalance = stateCopy.balance;
      let currentNFT;
      const filteredList = currentPortfolioList.filter((NFT: portfolioInt) => {
        if (NFT.name === NFTtoSell) currentBalance += NFT.sellPrice;
        return NFT.name !== NFTtoSell;
      });
      if (filteredList.length === 0) currentNFT = 'Purchase an NFT to view';
      return {
        ...state,
        portfolioList: filteredList,
        balance: currentBalance,
        currentNFT,
      };
    case types.POPULATE_LEADERBOARD:
      break;
    case types.UPDATE_BALANCE:
      const currBalance = stateCopy.balance;
      return { ...state, balance: currBalance - action.payload };
    case types.UPDATE_CURRENT_NFT:
      return { ...state, currentNFT: action.payload };
    case types.NFT_TO_BUY:
      return {
        ...state,
        NFTToBuy: {
          name: action.payload.name,
          description: action.payload.description,
          price: action.payload.price,
          image: action.payload.image,
        },
      };

    case types.POPULATE_NFT_LIST:
      return { ...state, NFTList: action.payload };

    default: {
      return state;
    }
  }
};

export default dashboardReducer;
