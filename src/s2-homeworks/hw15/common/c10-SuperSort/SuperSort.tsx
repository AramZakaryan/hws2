import React from 'react'
import downSvg from "./../icons/arrow-down.svg"
import upSvg from "./../icons/arrow-up.svg"
import nonSvg from "./../icons/arrow-down-up.svg"

// + добавить в проект иконки и импортировать
const downIcon = downSvg // '[\\/]'
const upIcon = upSvg // '[/\\]'
const noneIcon = nonSvg //'[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort ===down) return up
    if (sort ===up) return ""
    // + пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    return down // + исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {

    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
            />
            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
