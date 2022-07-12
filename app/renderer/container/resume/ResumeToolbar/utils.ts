export const onAddToolbar = (
    prevToolbarList: TSResume.SliderItem[],
    currentToolbar: TSResume.SliderItem
): TSResume.SliderItem[] => {

    const addKeys = prevToolbarList.map((s: TSResume.SliderItem) => s.key)
    let nextToolbarList = [...Array.from(prevToolbarList)]
    if (!addKeys.includes(currentToolbar.key)) {
        nextToolbarList.push(currentToolbar)
    }
    return nextToolbarList
}

export const onDeleteToolbar = (
    prevToolbarList: TSResume.SliderItem[],
    currentToolbar: TSResume.SliderItem
): TSResume.SliderItem[] => {

    const nextToolbarList = [...Array.from(prevToolbarList)]
    const findIndex = nextToolbarList.findIndex((s: TSResume.SliderItem) => s.key === currentToolbar.key)
    if (findIndex > -1) {
        nextToolbarList.splice(findIndex, 1)
    }
    return nextToolbarList
}