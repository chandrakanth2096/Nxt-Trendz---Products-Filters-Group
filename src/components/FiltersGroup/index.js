import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {clearButton} = props

  const renderRatingList = () => {
    const {ratingsList, activeRatingId, changeRatingId} = props
    return ratingsList.map(rating => {
      const isActive =
        activeRatingId === rating.ratingId ? 'rating-up up' : 'rating-up'
      const onClickRating = () => changeRatingId(rating.ratingId)

      return (
        <li className="rating-section" onClick={onClickRating}>
          <img
            className="rating-img"
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
          />
          <p className={isActive}>& up</p>
        </li>
      )
    })
  }

  const renderCategoryList = () => {
    const {categoryOptions, activeCategoryId, changeCategoryId} = props

    return categoryOptions.map(category => {
      const onClickCategory = () => changeCategoryId(category.categoryId)
      const isActive =
        activeCategoryId === category.categoryId ? 'item clicked' : 'item'
      return (
        <ul className="category-section">
          <li className="category-item" onClick={onClickCategory}>
            <p className={isActive}>{category.name}</p>
          </li>
        </ul>
      )
    })
  }

  const renderSearchInput = () => {
    const {searchInput, onChangeSearchInput, onKeyDownSearchInput} = props

    const onChangeInput = event => onChangeSearchInput(event.target.value)
    const onKeyDownInput = event => {
      if (event.key === 'Enter' || event.type === 'click') {
        onKeyDownSearchInput()
      }
    }

    return (
      <div className="input-container">
        <input
          type="search"
          className="input"
          value={searchInput}
          onChange={onChangeInput}
          onKeyDown={onKeyDownInput}
          placeholder="Search"
        />
        <BsSearch className="search-icon" onClick={onKeyDownInput} />
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      <div className="filters-group">
        {renderSearchInput()}
        <h1>Category</h1>
        {renderCategoryList()}
        <h1>Rating</h1>
        {renderRatingList()}
        <button type="button" className="clear-btn" onClick={clearButton}>
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default FiltersGroup
