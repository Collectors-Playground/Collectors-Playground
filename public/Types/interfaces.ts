export interface DispatchLogin {
  type: string;
  payload: string;
}

export interface dashboardAction {
  type: string;
  payload: string | string[];
}

export interface dashboardState {
  portfolioList: string[];
  currentNFT: string;
  balance: number;
  leaderBoard: string[];
}

export interface LoginProps {
  userReducer?: (username: string) => void;
}
