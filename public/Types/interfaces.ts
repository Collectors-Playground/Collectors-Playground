export interface DispatchLogin {
  type: string;
  payload: string;
}
export interface GlobalState {
  userReducer: { username: string };
  dashboardReducer: dashboardStateInt;
}
export interface dashboardActionTyp {
  type: string;
  payload?: any;
}

export type dashboardAction = dashboardActionTyp;

export interface dashboardProps {
  username: string;
  dashboard: dashboardStateInt;
  sellPortfolioDispatch: (NFT: string) => void;
  updateCurrentNFTDispatch: (
    name: string,
    image: string,
    description: string
  ) => void;
  updateNFTToBuyDispatch: (
    name: string,
    description: string,
    price: number,
    image: string
  ) => void;
  addNFTToPortfolioDispatch: (
    name: string,
    price: number,
    image: string,
    description: string
  ) => void;
  buyNFTDispatch: (price: number) => void;
}

export interface HomeProps {
  dashboard: dashboardStateInt;
  populateNFTListDispatch: (fetchedList: NFTListInt[]) => void;
}

export interface LeaderboardProps {
  username: string;
  balance: number;
  place?: number;
}

export interface portfolioInt {
  name: string;
  boughtPrice: number;
  sellPrice: number;
  image: string;
  description: string;
  sellNFT?: (NFT: string) => void;
  updateCurrentNFT?: (name: string, image: string, description: string) => void;
  currentNFT?: currentNFTInt;
}

export interface currentNFTInt {
  name: string;
  image: string;
  description: string;
}

export interface dashboardStateInt {
  portfolioList: portfolioInt[];
  currentNFT: currentNFTInt;
  balance: number;
  leaderboard: leaderboardInt[];
  NFTList: NFTListInt[];
  NFTToBuy: NFTListInt;
}

export interface InformationPopupProps {
  id?: number;
  token_id?: string;
  contract_name?: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  currentPortfolio: portfolioInt[];
  currentBalance: number;
  updateNFTToBuyDispatch: (
    name: string,
    description: string,
    price: number,
    image: string
  ) => void;
  buyNFTDispatch: (price: number) => void;
  addNFTToPortfolioDispatch: (
    name: string,
    price: number,
    image: string,
    description: string
  ) => void;
}
export interface DropdownProps {
  NFTList: NFTListInt[];
  updateNFTToBuyDispatch: (
    name: string,
    description: string,
    price: number,
    image: string
  ) => void;
}

export interface DropdownItemProps {
  id?: number;
  token_id?: string;
  contract_name?: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  updateNFTToBuyDispatch: (
    usedName: string,
    description: string,
    price: number,
    image: string
  ) => void;
}

export interface NFTListInt {
  id?: number;
  token_id?: string;
  contract_name?: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
}
export interface leaderboardInt {
  username: string;
  balance: number;
}
export interface BalanceProps {
  currentBalance: number;
  username: string;
}

export interface LoginProps {
  updateUsernameDispatch?: (username: string) => void;
  updatePortfolioListDispatch?: (portfolioList: string) => void;
  updateBalanceDispatch?: (balance: number) => void;
  populateLeaderboardDispatch?: (leaderboard: string) => void;
}
