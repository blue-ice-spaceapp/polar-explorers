import React from 'react'
import Grid from '@material-ui/core/Grid'
import DefaultCard from '../../components/atoms/DefaultCard'
import Title1 from '../../components/atoms/Title1'
import T2 from '../../components/atoms/Title2'
import styled from 'styled-components'

const InstructionItem = styled.div``
const Instructions = () => (
    <React.Fragment>
        <Title1>Instructions</Title1>

        <InstructionItem>
            <T2>estimated duration:</T2>
            <p>cca. 30Min</p>
        </InstructionItem>
        <InstructionItem>
            <T2>Recommanded age:</T2>
            <p>12-99</p>
        </InstructionItem>
        <InstructionItem>
            <T2>The goal:</T2>
            <p>complete 10 challenges before all the ice blocks melt! (and save the south cryosphere!)
The story: Taking part in a team of enthusiastic young explorers on a pular quest to save Antarctica from global warming. Troughout your expedition, you encounter many challenges linked to different arreas of scientific research, different time frames  and other common problematics. Your team also learns a lot about equipment, climate, animals and natural phenomenoms.</p>
        </InstructionItem>
        <InstructionItem>
            <T2>Inventory:</T2>
            <p>
            4 character tokens, 4 character cards (optional), 12 equipment tokens, 30 challenge cards, 1 playing board with numbered fragments, 42 fragments of melted ice, dice
            </p>
        </InstructionItem>
        <InstructionItem>
            <T2>Players(4):</T2>
            <p>adventurist, biulogist, geulogist, climatulogist </p>
        </InstructionItem>
        <InstructionItem>
            <T2>Movements:</T2>
            <ul>
                <li>you can move between fragments with joint borders (you can not move between fragments if only corners are joint)</li>
                <li>movements are determined by throwing the dice (odd numbers mean moving one; even numbers mean moving two fragment(s) further)</li>
                <li>oopss! Your fragment has been melted! Players can move from melted fragments only with even numbers</li>
            </ul>
        </InstructionItem>
        <InstructionItem>
            <T2>Game set up:</T2>
            <ul>
                <li>Each player takes one character card and one character token.</li>
                <li>Each player is dealt random 3 equipment tokens</li>
                <li>put all the Lotery numbers into a bag</li>
                <li>Each player takes a number from the lotery bag and playes their character token onto a field with the number they drew</li>
                <li>put all the lotery tickets back into the bag</li>
                <li>Shuffle the challange cards, and put them in a pile/deck</li>
                <li>Prepare 42 melted markers, and 10</li>
                <li>Game can now start, the first player to start the turn is the one standing on the ice fragment with the highest number, proceeding in a clockwise (as seated) order</li>
            </ul>
        </InstructionItem>
        <InstructionItem>
            <T2>Turn steps</T2>
            <ul>
                <li>When it is your turn: (Look at game set up) either move or attempt to tackle the shard challange </li>
                <li>
                    If you decided to move: thorw a single dice and if its an even number move twice, otherwise once.If you are standing on a flooded fragment, you need to trow a even number to move to out of it.<br />
                    There are two special equipment cards that can help you move, but each can be used only once in the whule game:
                    <ul>
                        <li>Plane: Use it for your self, or help a friend (in his move turn), to move from any fragment to any other fragment.</li>
                        <li>Ship: Use it for your self, or help a friend (in his move turn), to move from any fragment bordering the sea to any other fragment bordering the sea.</li>
                    </ul>
                </li>
                <li>
                    If you decided to tackle the shard challange (you can only tackle a challange if the shard is not yet marked with the "completed challange marker"):
                    <ul>
                        <li>Pick a challange from the challange pile/deck</li>
                        <li>Read the challange, throw 2 dice if the challange has a required score, else fullow the challange requirements</li>
                        <li>After throwing the dice, sum the dots to get your initial score</li>
                        <li>If your proffesion matches the one on the card add +1 to your score</li>
                        <li> If you have the equimpent on the card, add +1 to your score</li>
                        <li>If you are staning on a ice fragment that has a research station add +1 to your score</li>
                        <li>If your total score is equal or greater to the one on the card, you have successfully passed the challange</li>
                        <li>put a "completed challange marker" on the fragment, put the challange card into the "discard pile", next turn you have to move this shard is now complete</li>
                        <li>If you fail the challange keep the challange in your hand, you can retry to complete it the next turn</li>
                        <li> Other players can help you out, by moving (see moving) to your fragment, by doing so, add their their proffesion and equipment counts and they also throw, but just one dice</li>
                    </ul>
                </li>
                <li>Your turn is complete</li>
                <li>After all players completed their turn, the first player throws a dice, each turn a player counterclocwise of the last throws this, melting dice</li>
                <li>After that players take turns (clockwise), to draw lotery tokens from the bag, until they have as many as the dice shows</li>
                <li> Place "melted marker" on the fragments with matching numbers of the drawn numbers</li>
                <li>Put the drawn tokens into a discard pile next to challange discard pile</li>
                <li>Phase is now over, start player turns again.</li>
                <li>If there are 10 completed challange markers on the bord, you have won, if all the fragments are melted, you have lost</li>
            </ul>
        </InstructionItem>

    </React.Fragment>
)
export default Instructions

/* <InstructionItem>
            <T2>Equipment:</T2>

        </InstructionItem>
- once your challenge is completed, no more challenges can be completed on the same fragment
-special equipment (can only be used once, can be traded): 1.boat (if you are positioned on the outer fragment)takes you to any other outer fragment
2. Plane: takes you anywhere
End of the game: your teamm has either completed 10 challenges or lost all fragments (all of the ice has melted)
*/
