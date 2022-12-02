import { useEffect } from 'react';
import { Card, CardSkeleton } from './card/Card';
import { StyledCardsWrapper, StyledWrapper } from './UserComplaints.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getComplaints } from '../../store/actions/complaintsActions';

// const complaintsData = [
//   {
//     id: "08213",
//     title: "Rapha Paula",
//     message: `Hi, I noticed that it’s a bit hard for me to toggle between currencies when using
//         the convert feature, please can this be checked and possibly worked on?
//         I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.`,
//     status: "Resolve",
//   },
//   {
//     id: "08214",
//     title: "Rapha Paula",
//     message: `Hi, I noticed that it’s a bit hard for me to toggle between currencies when using
//         the convert feature, please can this be checked and possibly worked on?
//         I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.`,
//     status: "Resolved",
//   },
//   {
//     id: "08215",
//     title: "Rapha Paula",
//     message: `Hi, I noticed that it’s a bit hard for me to toggle between currencies when using
//         the convert feature, please can this be checked and possibly worked on?
//         I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.`,
//     status: "Still in Review",
//   },
//   {
//     id: "08216",
//     title: "Rapha Paula",
//     message: `Hi, I noticed that it’s a bit hard for me to toggle between currencies when using
//         the convert feature, please can this be checked and possibly worked on?
//         I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.`,
//     status: "Resolve",
//   },
//   {
//     id: "08217",
//     title: "Rapha Paula",
//     message: `Hi, I noticed that it’s a bit hard for me to toggle between currencies when using
//         the convert feature, please can this be checked and possibly worked on?
//         I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.`,
//     status: "Resolve",
//   },
//   {
//     id: "08218",
//     title: "Rapha Paula",
//     message: `Hi, I noticed that it’s a bit hard for me to toggle between currencies when using
//         the convert feature, please can this be checked and possibly worked on?
//         I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.`,
//     status: "Unresolved",
//   },
//   {
//     id: "08219",
//     title: "Rapha Paula",
//     message: `Hi, I noticed that it’s a bit hard for me to toggle between currencies when using
//         the convert feature, please can this be checked and possibly worked on?
//         I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.`,
//     status: "Resolved",
//   },
//   {
//     id: "08220",
//     title: "Rapha Paula",
//     message: `Hi, I noticed that it’s a bit hard for me to toggle between currencies when using
//         the convert feature, please can this be checked and possibly worked on?
//         I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.`,
//     status: "Resolve",
//   },
// ];

export default function UserComplaintsLayout() {
	const dispatch = useDispatch();
	const { complaints } = useSelector((state) => state.complaints);

	useEffect(() => {
		dispatch(getComplaints());
	}, [dispatch]);

	// if (!complaints) return <ComplaintSkeleton />;

	return (
		<StyledWrapper>
			<h2>Users’ Complaints</h2>

			<StyledCardsWrapper>
				{!complaints ? (
					<>
						<CardSkeleton />
						<CardSkeleton />
						<CardSkeleton />
					</>
				) : null}
				{complaints?.complaints.map((item, index) => (
					<Card key={index} data={item} />
				))}
			</StyledCardsWrapper>
		</StyledWrapper>
	);
}
