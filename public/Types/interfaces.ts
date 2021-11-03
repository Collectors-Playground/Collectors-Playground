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
  updateCurrentNFTDispatch: (NFT: string) => void;
  updateNFTToBuyDispatch: (
    name: string,
    description: string,
    price: number
  ) => void;
  addNFTToPortfolioDispatch: (name: string, price: number) => void;
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
  sellNFT?: (NFT: string) => void;
  updateCurrentNFT?: (NFT: string) => void;
  currentNFT?: string;
}

export interface dashboardStateInt {
  portfolioList: portfolioInt[];
  currentNFT: string;
  balance: number;
  leaderboard: leaderboardInt[];
  NFTList: NFTListInt[];
  NFTToBuy: NFTListInt;
}

export interface InformationPopupProps {
  name: string;
  description: string;
  price: number;
  currentPortfolio: portfolioInt[];
  currentBalance: number;
  updateNFTToBuyDispatch: (
    name: string,
    description: string,
    price: number
  ) => void;
  buyNFTDispatch: (price: number) => void;
  addNFTToPortfolioDispatch: (name: string, price: number) => void;
}
export interface DropdownProps {
  NFTList: NFTListInt[];
  updateNFTToBuyDispatch: (
    name: string,
    description: string,
    price: number
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
    name: string,
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
