import { useState } from 'react'
import './App.css'

function App() {
    const [totalCash, setTotalCash] = useState<number>(0)
    const [numberCaptains, setNumberCaptains] = useState<number>(0)
    const [numberBellman, setNumberBellman] = useState<number>(0)

    const totalPersons:number = numberCaptains + numberBellman
    const noCaptainCut:number = totalCash / totalPersons
    const captainCut:number = noCaptainCut * 1.5
    const totalCaptainCut:number = captainCut * numberCaptains
    const remainingAfterCaptainCut:number = totalCash - totalCaptainCut
    const bellmanCut:number = remainingAfterCaptainCut / numberBellman

    return (
        <>
            <table>
                <tr>
                    <td>
                        <label htmlFor="totalCash">Total Cash</label>
                    </td>
                    <td>
                        $<input type="number" id="totalCash" step="1" min="0" value={totalCash} onChange={(e) => { setTotalCash(parseInt(e.target.value)) }} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="numberCaptains">Number of Captains</label>
                    </td>
                    <td>
                        <input type="number" id="numberCaptains" step="1" min="0" value={numberCaptains} onChange={(e) => { setNumberCaptains(parseInt(e.target.value)) }} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="numberBellman">Number of Bellman</label>
                    </td>
                    <td>
                        <input type="number" id="numberBellman" step="1" min="0" value={numberBellman} onChange={(e) => { setNumberBellman(parseInt(e.target.value)) }} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="captainCut">Captain's Cut</label>
                    </td>
                    <td id='captainCut'>
                        { captainCut }
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="bellmanCut">Bellman's Cut</label>
                    </td>
                    <td id='bellmanCut'>
                        { bellmanCut }
                    </td>
                </tr>
            </table>
        </>
    )
}

export default App
