export interface MusicContract {
  id: string;
  originalSong: {
    title: string;
    artist: string;
    rightsholder: string;
  };
  revenueShare: number;
  remixerAddress: string;
  rightsholderAddress: string;
  status: 'draft' | 'pending' | 'signed' | 'rejected';
  createdAt: string;
}

export interface ContractFormData {
  songTitle: string;
  songArtist: string;
  rightsholder: string;
  revenueShare: number;
  remixerAddress: string;
  rightsholderAddress: string;
}