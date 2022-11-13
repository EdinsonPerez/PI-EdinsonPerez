import { useState, useEffect} from "react"
import { useDispatch } from "react-redux"
import { ASCENDENTE, DESCENDENTE, HIGHER, LOWER } from "../constantes/sort"
import { sort, filterByBreeds, filterByTemperaments, filterCreate, filterByWeightMin } from "../store/actions"



export default function Order() {
    const dispatch = useDispatch()
   const [order, setOrder] = useState('')
    useEffect(() => {
        dispatch(sort(order))
    }, [order])
        function onSelectChange(e) {
            setOrder(e.target.value)
    }
    function onSelectChangeWeigth(e) {
        setOrder(e.target.value)
}
      function handleFilterBreeds(e){
        dispatch(filterByBreeds(e.target.value))
        console.log(e.target.value)
      }

      function handleFilterWeightMin(e){
        dispatch(filterByWeightMin(e.target.value))
        console.log(e.target.value)
      }


      function handleFilterTemperaments(e){
        dispatch(filterByTemperaments(e.target.value))
       
      }
      function handleFilterCreate(e){
        dispatch(filterCreate(e.target.value))
       
      }
        
    return<div>
    <select name="select" onChange={onSelectChange}>
    <option value="AlphabeticalOrder">Order by Alphabetical</option>
    <option value={ASCENDENTE}> A   -     Z</option>
    <option value={DESCENDENTE}> Z   -    A</option>
    </select>

        <select name="select" onChange={onSelectChangeWeigth}>
            <option value="weigth">Order by Weight</option>
            <option value={HIGHER}>High</option>
            <option value={LOWER}>Low</option>
        </select>

    <select onChange={e => handleFilterCreate(e)}>
            <option value="All">Filter by Breeds Existing</option>
            <option value="Create">CREATE</option>
            <option value="Api">API</option>
        </select>


        <select onChange={e => handleFilterBreeds(e)}>
            <option value="All">Filter by All Breeds</option>
            <option value="Herding">HERDING</option>
             <option value="Hound">HOUND</option>
             <option value="Mixed">MIXED</option>
            <option value="Non-Sporting">NON-SPORTING</option>
            <option value="Sporting">SPORTING</option>
            <option value="Terrier">TERRIER</option>
             <option value="Toy">TOY</option>
            <option value="Working">WORKING</option>
        </select>
        <select onChange={e => handleFilterWeightMin(e)}>
            <option value="All">Filter by Weight MIN</option>
            <option value="50 - 60">Breed with Weight 3"</option>
             <option value="Hound">HOUND</option>
             <option value="Mixed">MIXED</option>
            <option value="Non-Sporting">NON-SPORTING</option>
            <option value="Sporting">SPORTING</option>
            <option value="Terrier">TERRIER</option>
             <option value="Toy">TOY</option>
            <option value="Working">WORKING</option>
        </select>

        <select>
            <option value="All">Filter by Weight MAX</option>
            <option value="Herding">HERDING</option>
             <option value="Hound">HOUND</option>
             <option value="Mixed">MIXED</option>
            <option value="Non-Sporting">NON-SPORTING</option>
            <option value="Sporting">SPORTING</option>
            <option value="Terrier">TERRIER</option>
             <option value="Toy">TOY</option>
            <option value="Working">WORKING</option>
        </select>


        <select>
            <option value="All">Filter by Temperaments</option>
            <option value="Active">ACTIVE</option>
             <option value="Adaptable">ADAPTABLE</option>
            <option value="Adventurous">ADVENTUROUS</option>
            <option value="Affectionate">AFFECTIONATE</option>
            <option value="Agile">AGILE</option>
             <option value="Aggressive">AGGRESSIVE</option>
            <option value="Alert">ALERT</option>
            <option value="Aloof">ALOOF</option>
            <option value="Amiable">AMIABLE</option>
             <option value="Assertive">ASSERTIVE</option>
            <option value="Athletic">ATHLETIC</option>
            <option value="Attentive">ATTENTIVE</option>
            <option value="Benevolent">BENEVOLENT</option>
             <option value="Bold">BOLD</option>
            <option value="Bossy">BOSSY</option>
            <option value="Boisterous">BOISTEROUS</option>
            <option value="Brave">BRAVE</option>
             <option value="Bright">BRIGHT</option>
             <option value="Bubbly">BUBBLY</option>
            <option value="Calm">CALM</option>
            <option value="Cat-like">CAT-LIKE</option>
            <option value="Cautious">CAUTIOUS</option>
             <option value="Charming">CHARMING</option>
            <option value="Cheerful">CHEERFUL</option>
            <option value="Clever">CLEVER</option>
            <option value="Clownish">CLOWNISH</option>
             <option value="Companionable">COMPANIONABLE</option>
            <option value="Composed">COMPOSED</option>
            <option value="Confident">CONFIDENT</option>
            <option value="Cooperative">COOPERATIVE</option>
             <option value="courageous">COURAGEOUS</option>
            <option value="Cunning">CUNNING</option>
            <option value="Curious">CURIOUS</option>
            <option value="Determined">DETERMINED</option>
             <option value="Devoted">DEVOTED</option>
             <option value="Dignified">DIGNIFIED</option>
            <option value="Docile">DOCILE</option>
            <option value="Dominant">DOMINANT</option>
            <option value="Dutiful">DUTIFUL</option>
             <option value="Eager">EAGER</option>
            <option value="Easygoing">EASYGOING</option>
            <option value="Energetic">ENERGETIC</option>
            <option value="Even Tempered">EVEN TEMPERED</option>
             <option value="Excitable">EXCITABLE</option>
            <option value="Extroverted">EXTROVERTED</option>
            <option value="Faithful">FAITHFUL</option>
            <option value="Familial">FAMILIAL</option>
             <option value="Fast">FAST</option>
            <option value="Fearless">FEARLESS</option>
            <option value="Fierce">FIERCE</option>
            <option value="Friendly">FRIENDLY</option>
             <option value="Fun-loving">FUN-LOVING</option>
             <option value="Feisty">FEISTY</option>
            <option value="Gay">GAY</option>
            <option value="Generous">GENEROUS</option>
            <option value="Gentle">GENTLE</option>
             <option value="Good-natured">GOOD-NATURED</option>
            <option value="Good-tempered">GOOD-TEMPERED</option>
            <option value="Great-hearted">GREAT-HEARTED</option>
            <option value="Happy">HAPPY</option>
             <option value="Hardworking">HARDWORKING</option>
            <option value="Hard-working">HARD-WORKING</option>
            <option value="Hardy">HARDY</option>
            <option value="Independent">INDEPENDENT</option>
             <option value="Inquisitive">INQUISITIVE</option>
            <option value="Intelligent">INTELLIGENT</option>
            <option value="Joyful">JOYFUL</option>
            <option value="Keen">KEEN</option>
             <option value="Kind">KIND</option>
             <option value="Liverly">LIVERLY</option>
            <option value="Lovable">LOVABLE</option>
            <option value="Loving">LOVING</option>
            <option value="Loyal">LOYAL</option>
             <option value="Merry">MERRY</option>
            <option value="Mischievous">MISCHIEVOUS</option>
            <option value="Obedient">OBEDIENT</option>
            <option value="Outgoing">OUTGOING</option>
             <option value="Opinionated">OPINIONATED</option>
            <option value="Patient">PATIENT</option>
            <option value="People-Oriented">PEOLPLE-ORIENTED</option>
            <option value="Playful">PLAYFUL</option>
             <option value="Powerful">POWERFUL</option>
            <option value="Protective">PROTECTIVE</option>
            <option value="Proud">PROUD</option>
            <option value="Quick">QUICK</option>
             <option value="Quiet">QUIET</option>
             <option value="Rational">RATIONAL</option>
            <option value="Receptive">RECEPTIVE</option>
            <option value="Refined">REFINED</option>
            <option value="Reliable">RELEIABLE</option>
             <option value="Reserved">RESERVED</option>
            <option value="Responsive">RESPONSIVE</option>
            <option value="Respectful">RESPECTFUL</option>
            <option value="Rugged">RUGGED</option>
             <option value="Self-assured">SELF-ASSURED</option>
            <option value="Self-confidence">SELF-CONFIDENCE</option>
            <option value="Self-important">SELF-IMPORTANT</option>
            <option value="Sensitive">SENSITIVE</option>
             <option value="Sociable">SOCIABLE</option>
            <option value="Spirited">SPIRITED</option>
            <option value="Spunky">SPUNKY</option>
            <option value="Stable">STABLE</option>
             <option value="Steady">STEADY</option>
             <option value="Strong">STRONG</option>
            <option value="Strong Willed">STRONG WILLED</option>
            <option value="Stubborn">STUBBORN</option>
            <option value="Sturdy">STURDY</option>
             <option value="Suspicious">SUSPICIOUS</option>
            <option value="Sweet-Tempered">SWEET-TEMPERED</option>
            <option value="Tenacious">TENACIOUS</option>
            <option value="Territorial">TERRITORIAL</option>
             <option value="Thoughtful">THOUGHTFUL</option>
            <option value="Tolerant">TOLERANT</option>
            <option value="Trainable">TRAINABLE</option>
            <option value="Trusting">TRUSTING</option>
             <option value="Trustworthy">TRUSTWORTHY</option>
            <option value="Unflappable">UNFLAPPABLE</option>
            <option value="Vigilant">VIGILANT</option>
            <option value="Vocal">VOCAL</option>
             <option value="Watchful">WATCHFUL</option>
             <option value="Wild">WILD</option>
            <option value="Willful">WILLFUL</option>
        </select>





    </div>
    
}