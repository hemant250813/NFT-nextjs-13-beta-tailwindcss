// pages/sell.js
"use client"

import { useState } from 'react';

export default function SellNFT() {
  const [nftName, setNFTName] = useState('');
  const [price, setPrice] = useState('');

  const handleSell = async (e) => {
    e.preventDefault();
    // Handle NFT sale logic here
  };

  return (
    <div>
      <h1>Sell NFT</h1>
      <form onSubmit={handleSell}>
        <input
          type="text"
          placeholder="NFT Name"
          value={nftName}
          onChange={(e) => setNFTName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Sell NFT</button>
      </form>
    </div>
  );
}
