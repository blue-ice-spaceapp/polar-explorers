import React from 'react'
import Title1 from '../../components/atoms/Title1'
import T2 from '../../components/atoms/Title2'
import styled from 'styled-components'

const InstructionItem = styled.div``
const Instructions = () => (
    <React.Fragment>
        <Title1>Instructions</Title1>

        <InstructionItem>
            <T2>Estimated duration:</T2>
            <p>cca. 30Min</p>
        </InstructionItem>
        <InstructionItem>
            <T2>Recommended age:</T2>
            <p>12-99</p>
        </InstructionItem>
        <InstructionItem>
            <T2>The goal:</T2>
            <p>Complete 10 challenges before all the ice blocks melt! (and save the south cryosphere!) The story: Being part of a team of enthusiastic young explorers on a polar quest to save Antarctica from global warming. Throughout your expedition, you encounter many challenges linked to different areas of scientific research, different time frames and other common problems. Your team also learns a lot about equipment, climate, animals and natural phenomenons.</p>
        </InstructionItem>
        <InstructionItem>
            <T2>Inventory:</T2>
            <ul>
                <li>4 character tokens</li>
                <li>4 character cards (optional)</li>
                <li>12 equipment tokens, 30 challenge cards</li>
                <li>1 playing board with numbered fields</li>
                <li>42 melted ice markers</li>
                <li>10 challenge completed markers</li>
                <li>2  dice</li>
            </ul>
        </InstructionItem>
        <InstructionItem>
            <T2>Players(4):</T2>
            <p>adventurist, biologist, geologist, climatologist</p>
        </InstructionItem>
        <InstructionItem>
            <T2>Movements:</T2>
            <ul>
                <li>You can move between fields with joint borders (you can not move between fields if only corners are joint).</li>
                <li>Movements are determined by throwing the dice (odd numbers mean moving once; even numbers mean moving two field(s) ahead).</li>
                <li>Oops! The field you are standing on has melted! Players can move from a melted field only if you get a even number on the dice. Same applies if you decided to move into a melted field, to move on you need a even number</li>
            </ul>
        </InstructionItem>
        <InstructionItem>
            <T2>Game set up:</T2>
            <ul>
                <li>Each player takes one character card and one character token.</li>
                <li>Each player is dealt 3 random equipment tokens.</li>
                <li>Put all the lottery numbers into a bag.</li>
                <li>Each player takes a number from the lottery bag and plays their character token onto a field with the number they drew</li>
                <li>Put all the lottery tickets back into the bag.</li>
                <li>Shuffle the challenge cards, and put them in a pile/deck.</li>
                <li>Prepare 42 melted ice markers, and 10 completed challenge markers.</li>
                <li>Game can now start. The first player to start the turn is the one standing on the ice field with the highest number, proceeding in a clockwise (as seated) order.</li>
            </ul>
        </InstructionItem>
        <InstructionItem>
            <T2>Turn steps</T2>
            <ul>
                <li>When it is your turn: (Look at game set up) either move or attempt to tackle the field challenge.</li>
                <li>If you decided to move: throw a single dice and if it's an even number move twice, otherwise once. If you are standing on a flooded field, you need to throw an even number to move to out of it.            </li>
                <li>
                    There are two special equipment cards that can help you move, but each can be used only once in the whole game:
                    <ul>
                        <li><b>Plane:</b> Use it for yourself, or help a friend (in his move turn), to move from any field to any other field.</li>
                        <li><b>Ship:</b> Use it for yourself, or help a friend (in his move turn), to move from any field bordering the sea to any other field bordering the sea.</li>
                    </ul>
                </li>
                <li>
                    If you decided to tackle the field challenge (you can only tackle a challenge if the field is not yet marked with the "completed challenge marker"):
                    <ul>
                        <li>Pick a challenge from the challenge pile/deck.</li>
                        <li>Read the challenge, throw 2 dice if the challenge has a required score, else follow the challenge requirements.</li>
                        <li>After throwing the dice, sum the dots to get your initial score.</li>
                        <li>If your profession matches the one on the card add +1 to your score.</li>
                        <li>If you have the equipment on the card, add +1 to your score.</li>
                        <li>If you are standing on a ice field that has a research station, add +1 to your score.</li>
                        <li>If your total score is equal or greater to the one on the card, you have successfully passed the challenge.</li>
                        <li>Put a "completed challenge” marker on the field you are currently standing on, put the challenge card into the "discard pile", next turn you have to move your character, this field is now completed, and no new challenges can be taken on this field.</li>
                        <li>If you fail the challenge, keep the challenge in your hand, you can retry to complete it the next turn.</li>
                        <li>Other players can help you out, by moving (see moving) to your field, by doing so, add their their profession and equipment counts and they also throw, but just one dice.</li>
                    </ul>
                </li>
                <li>Your turn is complete.</li>
                <li>After all players completed their turn, the first player throws a dice, each turn a player counterclockwise of the last throws this melting dice.</li>
                <li>After that players take turns (clockwise), to draw lottery tokens from the bag, until they have as many as the dice shows.</li>
                <li>Place "melted marker" on the fields with matching numbers of the drawn numbers.</li>
                <li>Put the drawn tokens into a discard pile next to challenge discard pile.</li>
                <li>Phase is now over, start player turns again.</li>
                <li>If there are 10 completed challenge markers on the bord, you have won, if all the fields are melted, you have lost.</li>
            </ul>
        </InstructionItem>

    </React.Fragment>
)
export default Instructions
