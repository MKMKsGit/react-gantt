# PM Req

## Edit Mode

can edit on click

```ts
//store.ts

// @computed get getBarList(): Gantt.Bar[] {
const barList = flattenData.map((item, index) => {
    ...
    const itemDisabled = this.disabled || item.record.disabled

    const record = { ...item.record, disabled: itemDisabled }
    ...
})
```

### Enabled Edit

<code src="./poc/edit-enabled.tsx"></code>

### Disabled Edit

Make some of the bars disabled <code src="./poc/edit-disabled-some.tsx"></code>

Whole Timeline is disabled <code src="./poc/edit-disabled.tsx"></code>

## View

### Fixed Height

<code src="./poc/view-fixed-height.tsx"></code>

### Display like Biz

<code src="./poc/view-business.tsx"></code>

### Display after today is changed

<code src="./poc/view-today-change.tsx"></code>

### Custom Bar

You can customize the bar by adding a `type` field to the data and then use the `barRender` prop to render the bar based on the

`data`:

```json
[
  {
    "id": 0,
    "name": "Title 1",
    ..., // other fields
    "type": "PRODUCT"
  },
  {
    "id": 1,
    "name": "Title 2",
    ..., // other fields
    "type": "EXAM"
  },
  {
    "id": 2,
    "name": "Title 3",
    ..., // other fields
    "type": "PRODUCT"
  }
]
```

from the code above, the `PRODUCT` type will render a green bar and the `EXAM` type will render a red bar like the following: <code src="./poc/view-custom-bar.tsx"></code>

# Dev Concern
