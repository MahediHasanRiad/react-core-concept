import useTheme from "../context/theme"

export default function ThemeBtn() {

  const {themeMode, lightTheme, darkTheme} = useTheme()

  const onChangeBtn = (e) => {
    const value = e.target.value 
    if(value === 'dark') {
      darkTheme()
    }else {
      lightTheme()
    }
  }

  return (
    <div>
      <select className="border p-2 rounded" value={themeMode} onChange={onChangeBtn}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  )
}
