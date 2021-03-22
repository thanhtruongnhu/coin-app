import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { assign, selectBalance } from './features/balanceSlice';
import { selectTicker, update } from './features/tickerSlice';
import { selectUser } from './features/userSlice';
import db from './firebase';
import firebase from 'firebase';

function Update({
	activate,
	isBuy,
	inputQuantity,
	currentBalance,
	currentPrice,
	id,
}) {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const ticker = useSelector(selectTicker);
	const balance = useSelector(selectBalance);

	useEffect(() => {
		// var init = ticker.filter((coin) => coin.id === id)[0];
		// var arr = { ...init };
		// arr.quantity = 1000;
		// arr.priceBought = 1000;

		// console.log(arr);

		if (activate) {
			var ref = db.collection('user').doc(user.email);
			var newBalance = null;
			var Coin = ticker.filter((coin) => coin.id === id)[0];
			Coin = { ...Coin };

			var newTicker = ticker;
			newTicker = newTicker.filter((obj) => obj.id !== id); // Delete ticker

			// newTicker.forEach(function (item) {
			//     if (item.id === id) {
			//         item.quantity = 1000;
			//         item.priceBought = 1000;
			//         return;
			//     }
			// });

			// console.log(newTicker)

			if (isBuy) {
				newBalance = currentBalance - inputQuantity * currentPrice;
				dispatch(assign(newBalance));
				Coin.quantity = Number(Coin.quantity) + Number(inputQuantity);
				Coin.priceBought =
					(Coin.priceBought * Coin.quantity + currentPrice * inputQuantity) /
					(Number(Coin.quantity) + Number(inputQuantity));
				console.log( Coin.quantity);
                console.log(  Coin.priceBought);
			} else {
				newBalance = currentBalance + inputQuantity * currentPrice;
				dispatch(assign(newBalance));
				Coin.quantity = Coin.quantity - inputQuantity;
			}

			ref
				.update({ balance: newBalance })
				.then(() => {
					console.log('Balance successfully updated!');
				})
				.catch((error) => {
					// The document probably doesn't exist.
					console.error(`Error updating balance`, error);
				});

			if (Coin.quantity !== 0) {
				console.log('INSIDE');
				ref
					.collection('tickers')
					.doc(id)
					.update({ quantity: Coin.quantity, price_bought: Coin.priceBought })
					.then(() => {
						console.log('Balance successfully updated!');
					})
					.catch((error) => {
						// The document probably doesn't exist.
						console.error(`Error updating balance`, error);
					});

				newTicker = [...newTicker, Coin];
			} else {
				// if coin.quantity === 0 {delete document}
				ref
					.collection('tickers')
					.doc(id)
					.update({
						quantity: firebase.firestore.FieldValue.delete(),
						price_bought: firebase.firestore.FieldValue.delete(),
						date_bought: firebase.firestore.FieldValue.delete(),
						name: firebase.firestore.FieldValue.delete(),
						symbol: firebase.firestore.FieldValue.delete(),
					})
					.then(() => {
						console.log('Balance successfully updated!');
					})
					.catch((error) => {
						// The document probably doesn't exist.
						console.error(`Error deleting coin`, error);
					});
			}
			dispatch(update(newTicker));
		}
		// return () => {
		// 	cleanup;
		// };
	}, [dispatch, activate]);

	// console.log(Coin);

	return <>{!activate ? <></> : <>wrtwerwe</>}</>;
}

export default Update;
