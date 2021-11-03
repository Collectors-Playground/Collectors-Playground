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
    cost: number
  ) => void;
  addNFTToPortfolioDispatch: (name: string, cost: number) => void;
  buyNFTDispatch: (cost: number) => void;
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
  cost: number;
  currentPortfolio: portfolioInt[];
  currentBalance: number;
  updateNFTToBuyDispatch: (
    name: string,
    description: string,
    cost: number
  ) => void;
  buyNFTDispatch: (cost: number) => void;
  addNFTToPortfolioDispatch: (name: string, cost: number) => void;
}
export interface DropdownProps {
  NFTList: NFTListInt[];
  updateNFTToBuyDispatch: (
    name: string,
    description: string,
    cost: number
  ) => void;
}

export interface DropdownItemProps {
  name: string;
  description: string;
  cost: number;
  updateNFTToBuyDispatch: (
    name: string,
    description: string,
    cost: number
  ) => void;
}

export interface NFTListInt {
  name: string;
  description: string;
  cost: number;
}
export interface leaderboardInt {
  username: string;
  balance: number;
}
export interface BalanceProps {
  currentBalance: number;
}

export interface LoginProps {
  updateUsernameDispatch?: (username: string) => void;
  updatePortfolioListDispatch?: (portfolioList: string) => void;
  updateBalanceDispatch?: (balance: number) => void;
  populateLeaderboardDispatch?: (leaderboard: string) => void;
}
