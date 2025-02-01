import { useState } from 'react';
import './index.css';
import { ContractForm } from './components/ContractForm';
import { ContractPreview } from './components/ContractPreview';
import { MusicContract, ContractFormData } from './types/contract';
import { Plus } from 'lucide-react';

function App() {
  const [contracts, setContracts] = useState<MusicContract[]>([]);
  const [showForm, setShowForm] = useState(false);

  const handleCreateContract = (data: ContractFormData) => {
    const newContract: MusicContract = {
      id: Date.now().toString(),
      originalSong: {
        title: data.songTitle,
        artist: data.songArtist,
        rightsholder: data.rightsholder,
      },
      revenueShare: data.revenueShare,
      remixerAddress: data.remixerAddress,
      rightsholderAddress: data.rightsholderAddress,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    setContracts([...contracts, newContract]);
    setShowForm(false);
  };

  const handleSignContract = (contractId: string) => {
    setContracts(contracts.map(contract =>
      contract.id === contractId
        ? { ...contract, status: 'signed' }
        : contract
    ));
  };

  const handleRejectContract = (contractId: string) => {
    setContracts(contracts.map(contract =>
      contract.id === contractId
        ? { ...contract, status: 'rejected' }
        : contract
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">FuturePublish</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="mb-8 inline-flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Create New Contract
          </button>
        )}

        {showForm ? (
          <ContractForm onSubmit={handleCreateContract} />
        ) : (
          <div className="space-y-8">
            {contracts.map(contract => (
              <ContractPreview
                key={contract.id}
                contract={contract}
                onSign={() => handleSignContract(contract.id)}
                onReject={() => handleRejectContract(contract.id)}
              />
            ))}
            {contracts.length === 0 && (
              <div className="text-center text-gray-500 py-12">
                No contracts yet. Create your first contract to get started.
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;