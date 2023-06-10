"use client"
import React, { useState } from 'react';
import { Link } from 'next/link'
import Image from 'next/image';



export default function Home() {
  const [nfts, setNfts] = useState([
    {
      id: 1,
      title: 'NFT Title 1',
      description: 'NFT Description 1',
      price: '1 ETH',
      owner: 'John Doe',
      images : 'https://firebasestorage.googleapis.com/v0/b/octopods-nft-f4416.appspot.com/o/DALL%C2%B7E%202023-01-30%2016.55.49%20-%20vector%20art%20for%20octopus%20with%20scuba%20suit_.png?alt=media&token=788d8c20-b896-415d-96e0-faa08aed188e&_gl=1*fsp4zw*_ga*NjIzMzc5MzIzLjE2NjYxNzQ2OTc.*_ga_CW55HF8NVT*MTY4NjQyNTc1Ni45LjEuMTY4NjQyODI2Ny4wLjAuMA..'
    },
    {
      id: 2,
      title: 'NFT Title 2',
      description: 'NFT Description 2',
      price: '0.5 ETH',
      owner: 'Jane Smith',
      images : 'https://firebasestorage.googleapis.com/v0/b/octopods-nft-f4416.appspot.com/o/DALL%C2%B7E%202023-01-30%2016.54.38%20-%20vector%20art%20for%20octopus%20with%20scuba%20suit_.png?alt=media&token=16ff0918-481e-4a4a-8092-651e1df4703d&_gl=1*mw4rol*_ga*NjIzMzc5MzIzLjE2NjYxNzQ2OTc.*_ga_CW55HF8NVT*MTY4NjQyNTc1Ni45LjEuMTY4NjQyODIwNi4wLjAuMA..'
    },
    {
      id: 3,
      title: 'NFT Title 3',
      description: 'NFT Description 3',
      price: '2 ETH',
      owner: 'Mike Johnson',
      images : 'https://firebasestorage.googleapis.com/v0/b/octopods-nft-f4416.appspot.com/o/DALL%C2%B7E%202023-01-30%2016.54.48%20-%20vector%20art%20for%2050%20octopus%20in%20a%20space%20war%20_.png?alt=media&token=aee46126-37e9-4b8f-b6c4-7ca563aa7c20&_gl=1*13efr25*_ga*NjIzMzc5MzIzLjE2NjYxNzQ2OTc.*_ga_CW55HF8NVT*MTY4NjQyNTc1Ni45LjEuMTY4NjQyODIzOC4wLjAuMA..'
    },
    {
      id: 4,
      title: 'NFT Title 4',
      description: 'NFT Description 4',
      price: '1.3 ETH',
      owner: 'owner',
      images : 'https://firebasestorage.googleapis.com/v0/b/octopods-nft-f4416.appspot.com/o/DALL%C2%B7E%202023-01-30%2016.55.24%20-%20vector%20art%20for%2050%20octopus%20in%20a%20space%20war%20_.png?alt=media&token=6269beab-4dad-4b3b-8d8e-68bc489eb891&_gl=1*1bqvc5q*_ga*NjIzMzc5MzIzLjE2NjYxNzQ2OTc.*_ga_CW55HF8NVT*MTY4NjQyNTc1Ni45LjEuMTY4NjQyODUwMS4wLjAuMA..'
    },
    {
      id: 5,
      title: 'OCTOPODS NFT 5',
      description: 'NFT Description 4',
      price: '1.3 ETH',
      owner: 'owner',
      images : 'https://firebasestorage.googleapis.com/v0/b/octopods-nft-f4416.appspot.com/o/DALL%C2%B7E%202023-06-11%2002.02.34%20-%20vector%20art%20for%20octopus%20with%20stun%20gun__.png?alt=media&token=59fb23e0-6135-47f3-93c3-e4df1bcd8067&_gl=1*1l0h07t*_ga*NjIzMzc5MzIzLjE2NjYxNzQ2OTc.*_ga_CW55HF8NVT*MTY4NjQyNTc1Ni45LjEuMTY4NjQyOTM1OS4wLjAuMA..'
    },
    {
      id: 6,
      title: 'OCTOPODS NFT 6',
      description: 'NFT Description 6',
      price: '1.3 ETH',
      owner: 'owner',
      images : 'https://firebasestorage.googleapis.com/v0/b/octopods-nft-f4416.appspot.com/o/DALL%C2%B7E%202023-06-11%2002.02.44%20-%20vector%20art%20for%20octopus%20with%20stun%20gun__.png?alt=media&token=a2f4330a-c7d1-40b1-87f3-1c9a33c3e528&_gl=1*13pvvzf*_ga*NjIzMzc5MzIzLjE2NjYxNzQ2OTc.*_ga_CW55HF8NVT*MTY4NjQyNTc1Ni45LjEuMTY4NjQyOTM2Ny4wLjAuMA..'
    },
    {
      id: 7,
      title: 'OCTOPODS NFT 7',
      description: 'NFT Description 7',
      price: '1.3 ETH',
      owner: 'owner',
      images : 'https://firebasestorage.googleapis.com/v0/b/octopods-nft-f4416.appspot.com/o/DALL%C2%B7E%202023-06-11%2002.02.08%20-%20vector%20art%20for%2050%20octopus%20in%20a%20space%20war%20_.png?alt=media&token=da675a0b-3c7a-492f-a944-0306c9bf6abd&_gl=1*9zc5lv*_ga*NjIzMzc5MzIzLjE2NjYxNzQ2OTc.*_ga_CW55HF8NVT*MTY4NjQyNTc1Ni45LjEuMTY4NjQyOTM1MC4wLjAuMA..'
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
            
            <div className=" bg-lightblue mb-4" />
            <img width = "500" height="500" src = {nft.images} />
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
