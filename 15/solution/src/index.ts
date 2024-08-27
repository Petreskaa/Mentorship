import { ItemType, StateTypes } from './types'

const allItems: ItemType[] = [
  {
    state: 'to-do',
    id: new Date().valueOf(),
    title: 'Create todos',
    points: 1,
    description: `Click the above "add new tods" after adding them you can drag and drop each item.`
  },
  {
    state: 'in-testing',
    id: new Date().valueOf() + 1,
    title: 'Create todos',
    points: 1,
    description: `Click the above "add new tods" after adding them you can drag and drop each item.`
  }
]

const allSections = document.querySelectorAll<HTMLDivElement>('.section')!
const DRAGOVERSHADOW = `3px 3px 6px rgba(0, 0, 0, 0.2)`

let draggingItem: HTMLDivElement

function renderAllItems (items: ItemType[]) {
  items.forEach(item => {
    const card = renderItem(item)

    allSections.forEach(section => {
      if (section.id === item.state) {
        section.append(card)
      }
    })
  })
}

renderAllItems(allItems)

function onDragStart (e: DragEvent) {
  draggingItem = e.currentTarget as HTMLDivElement
  console.log('dragstart')
}

function onDragOver (this: HTMLDivElement, e: DragEvent) {
  e.preventDefault()
  this.style.boxShadow = DRAGOVERSHADOW
  console.log('dragover')
}

function onDragEnter (this: HTMLDivElement) {
  this.style.boxShadow = DRAGOVERSHADOW
  console.log('dragenter')
}

function onDragLeave (this: HTMLDivElement) {
  this.style.boxShadow = 'none'
  console.log('dragleave')
}

function onDrop (this: HTMLDivElement, e: DragEvent) {
  this.style.boxShadow = 'none'
  console.log('drop')

  const idx = allItems.findIndex(item => item.id === +draggingItem.id)
  allItems[idx].state = this.id as StateTypes
  console.log(allItems, allItems[idx])
  this.appendChild(draggingItem)
}

allSections.forEach(section => {
  section.addEventListener('dragenter', onDragEnter)
  section.addEventListener('dragover', onDragOver)
  section.addEventListener('dragleave', onDragLeave)
  section.addEventListener('drop', onDrop)
})

// Add new item

const newItemBtn = document.querySelector<HTMLDivElement>('#newItem')!
newItemBtn.addEventListener('click', onNewItem)

function onNewItem (this: HTMLDivElement, e: Event) {
  if (this.classList.contains('is-adding')) return

  this.classList.add('is-adding')

  const form = document.createElement('form')

  const newTitle = document.createElement('input')
  newTitle.placeholder = 'Title...'
  newTitle.classList.add('form-control', 'form-control-sm')

  const storyPoints = document.createElement('input')
  storyPoints.setAttribute('type', 'number')
  storyPoints.placeholder = 'Story Points...'
  storyPoints.classList.add('form-control', 'form-control-sm')

  const description = document.createElement('textarea')
  description.setAttribute('rows', '3')
  description.placeholder = 'Description'
  description.classList.add('form-control', 'form-control-sm')

  const confirmBtn = document.createElement('button')
  confirmBtn.classList.add('btn', 'btn-success', 'w-100')
  confirmBtn.textContent = 'Add'

  form.append(newTitle, storyPoints, description, confirmBtn)
  this.append(form)

  form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault()

    const newItem: ItemType = {
      id: new Date().valueOf(),
      title: newTitle.value,
      description: description.value,
      points: storyPoints.valueAsNumber,
      state: 'to-do'
    }
    allItems.push(newItem)

    const item = renderItem(newItem)

    allSections.forEach(section => {
      if (section.id === newItem.state) {
        section.append(item)
      }
    })

    form.remove()
    this.classList.remove('is-adding')
  })
}

function renderItem ({ id, title, points, description }: ItemType) {
  const div = document.createElement('div')
  div.id = id.toString()
  div.classList.add('item')
  div.setAttribute('draggable', 'true')

  div.innerHTML = `<h5>${title} <span>${points}</span></h5>
                     <p>${description}</p>`

  div.addEventListener('dragstart', onDragStart)
  return div
}
