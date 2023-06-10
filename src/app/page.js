"use client"
import React, { useState } from 'react';
import { Link } from 'next/link'




export default function Home() {
  const [nfts, setNfts] = useState([
    {
      id: 1,
      title: 'NFT Title 1',
      description: 'NFT Description 1',
      price: '1 ETH',
      owner: 'John Doe',
    },
    {
      id: 2,
      title: 'NFT Title 2',
      description: 'NFT Description 2',
      price: '0.5 ETH',
      owner: 'Jane Smith',
    },
    {
      id: 3,
      title: 'NFT Title 3',
      description: 'NFT Description 3',
      price: '2 ETH',
      owner: 'Mike Johnson',
    },
  ]);

  const handleAddNFT = () => {
    const newNFT = {
      id: Date.now(),
      title: 'New NFT Title',
      description: 'New NFT Description',
      price: '0.1 ETH',
      owner: 'Anonymous',
    };
    setNfts((prevNfts) => [...prevNfts, newNFT]);
  };

  return (
    <div className="container bg-slate-900">
      <h1 className="text-4xl font-extrabold text-teal-400 hover:text-teal-600 text-center mb-8">OCTOPODS NFT</h1>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* NFT cards */}
        {nfts.map((nft) => (
          <div key={nft.id} className="border p-4 rounded shadow">
            {/* NFT image */}
            <div className="h-40 bg-lightblue mb-4" />
            {/* NFT title */}
            <h2 className="text-xl font-semibold text-white mb-2">{nft.title}</h2>
            {/* NFT description */}
            <p className=" mb-2 text-white">{nft.description}</p>
            {/* NFT price */}
            <h2 className="text-xl font-semibold mb-2 text-white">{nft.price}</h2>
            {/* NFT owner */}
            <p className="text-gray-100 mb-2">Owned by {nft.owner}</p>
            {/* Buy NFT button */}
            <button className="bg-teal-400 hover:bg-teal-700 text-white rounded px-4 py-2">Buy</button>
          </div>
        ))}
      </div>
      {/* Add NFT button */}
      <button
        className="bg-green-500 text-white rounded px-4 py-2 mt-4"
        onClick={handleAddNFT}
      >
        Add NFT
      </button>
    </div>
  );
}
