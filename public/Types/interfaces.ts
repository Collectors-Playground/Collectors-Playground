export interface DispatchLogin {
  type: string;
  payload: string;
}
export interface GlobalState {
  userReducer: { username: string };
  dashboardReducer: dashboardStateInt;
}
export interface dashboardAction {
  type: string;
  payload: string | string[];
}

export interface dashboardProps {
  username: string;
  dashboard: dashboardStateInt;
  sellPortfolioDispatch?: (NFT: string) => void;
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
}
export interface dashboardStateInt {
  portfolioList: portfolioInt[];
  currentNFT: string;
  balance: number;
  leaderboard: leaderboardInt[];
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
