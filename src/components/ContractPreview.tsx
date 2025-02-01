import { MusicContract } from '../types/contract';
import { FileText, Check, X } from 'lucide-react';

interface ContractPreviewProps {
  contract: MusicContract;
  onSign?: () => void;
  onReject?: () => void;
}

export function ContractPreview({ contract, onSign, onReject }: ContractPreviewProps) {
  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FileText className="w-6 h-6" />
          Music Sampling Agreement
        </h2>
        <span className={`px-3 py-1 rounded-full text-sm ${
          contract.status === 'signed' ? 'bg-green-100 text-green-800' :
          contract.status === 'rejected' ? 'bg-red-100 text-red-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {contract.status.charAt(0).toUpperCase() + contract.status.slice(1)}
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Original Work</h3>
          <p>{contract.originalSong.title} by {contract.originalSong.artist}</p>
        </div>

        <div>
          <h3 className="font-semibold">Rights Holder</h3>
          <p>{contract.originalSong.rightsholder}</p>
          <p className="text-sm text-gray-500">{contract.rightsholderAddress}</p>
        </div>

        <div>
          <h3 className="font-semibold">Revenue Share</h3>
          <p>{contract.revenueShare}% of revenues from derivative work</p>
        </div>

        <div>
          <h3 className="font-semibold">Remixer Address</h3>
          <p className="text-sm text-gray-500">{contract.remixerAddress}</p>
        </div>
      </div>

      {contract.status === 'pending' && (
        <div className="flex gap-4 mt-6">
          <button
            onClick={onSign}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" /> Sign Contract
          </button>
          <button
            onClick={onReject}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
          >
            <X className="w-4 h-4" /> Reject Contract
          </button>
        </div>
      )}
    </div>
  );
}