import { useSelector, useDispatch } from 'react-redux'
import { calcFn, calcOperation } from '../../Redux/reducers/ReducerCalc'
import './calc.scss'
export const Calc = () => {
  const dispatch = useDispatch()
  let { counter, button, operations } = useSelector(store => store.Calc)

  return (
    <div className='calc'>
      <input type='text' value={counter} onChange={() => counter} className='Input_counter' />
      <div className="btn">
        {button.map((el, index) =>
          <button key={index} onClick={() => dispatch(calcFn(el.val))}>{el.val}</button>
        )}
        <div className="Operation_items">
          {operations.map((el, index) =>
            <button key={index} onClick={() => dispatch(calcOperation(el.val))}>{el.val}</button>
          )}
        </div>
      </div>
    </div>
  )
}
