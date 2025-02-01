import { useForm } from 'react-hook-form';
import { ContractFormData } from '../types/contract';
import { PenLine } from 'lucide-react';

export function ContractForm({ onSubmit }: { onSubmit: (data: ContractFormData) => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<ContractFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto p-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <PenLine className="w-6 h-6" />
          Create Music Sampling Contract
        </h2>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Original Song Title</label>
          <input
            {...register('songTitle')}
            className="w-full p-2 border rounded-md"
            placeholder="Enter song title"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Original Artist</label>
          <input
            {...register('songArtist')}
            className="w-full p-2 border rounded-md"
            placeholder="Enter artist name"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Rights Holder</label>
          <input
            {...register('rightsholder')}
            className="w-full p-2 border rounded-md"
            placeholder="Enter rights holder name"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Revenue Share (%)</label>
          <input
            type="number"
            {...register('revenueShare')}
            className="w-full p-2 border rounded-md"
            placeholder="Enter revenue share percentage"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Remixer Wallet Address</label>
          <input
            {...register('remixerAddress')}
            className="w-full p-2 border rounded-md"
            placeholder="Enter Ethereum wallet address"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Rights Holder Wallet Address</label>
          <input
            {...register('rightsholderAddress')}
            className="w-full p-2 border rounded-md"
            placeholder="Enter Ethereum wallet address"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Create Contract
      </button>
    </form>
  );
}