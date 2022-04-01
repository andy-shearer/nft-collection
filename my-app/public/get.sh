#!/bin/bash

for i in {0..19}
do
  curl "https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/ae651d5fd04ada78f97a2cb540cfd1c482ea542f/my-app/public/cryptodevs/$i.svg" -o "$i.svg"
done
