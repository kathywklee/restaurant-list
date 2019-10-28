import { Link, HOME, COMPONENTS } from '../../../mechanisms/routing';

import styles from './header-style.scss';

const Header = props => (
  <header className={styles.header}>
    <aside className={styles.logo}>
      <img
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDY5MSAyMDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY5MSAyMDM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9IkxvZ29fQmFzZSI+CjwvZz4KPGcgaWQ9IlRha2Vhd2F5Q09NIj4KCTxnPgoJCTxnIGlkPSJUYWtlYXdheUNPTV9GdWxsX0NvbG91cl8xNl8iPgoJCQk8ZyBpZD0iVGFrZWF3YXlDT00tMl8yXyI+CgkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjE4LjIsOTMuOXYtNy42Yy0wLjEtMC45LTAuOC0xLjctMS43LTEuN2gtNDEuMWMtMSwwLTEuNywwLjgtMS44LDEuOHY3LjVjMCwxLDAuOCwxLjcsMS43LDEuOGgxMy41CgkJCQkJYzAuNSwwLDAuOSwwLjQsMC45LDAuOXY0Mi43YzAsMSwwLjgsMS44LDEuNywxLjhoOWMwLjksMCwxLjctMC44LDEuNy0xLjd2LTQzYzAuMS0wLjQsMC41LTAuNywwLjktMC43aDEzLjUKCQkJCQlDMjE3LjQsOTUuNiwyMTguMSw5NC44LDIxOC4yLDkzLjkiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNDEuMSwxMDQuMmMtMS40LTEuOC0zLjMtMy4xLTUuNC0zLjljLTIuOC0xLTUuNy0xLjQtOC42LTEuM2MtMy4yLDAtNi4zLDAuNS05LjMsMS42CgkJCQkJYy0yLjMsMC44LTQuNSwyLTYuNSwzLjZjLTAuNywwLjctMC42LDEuOCwwLjEsMi41bDAsMGwzLjcsMy44bDAsMGMwLjcsMC43LDEuOSwwLjcsMi42LDBjMCwwLDAsMCwwLDBsMCwwCgkJCQkJYzAuOS0wLjgsMS45LTEuNSwzLTIuMWMxLjctMC44LDMuNS0xLjMsNS40LTEuMmMyLDAsMy45LDAuNiw1LjQsMS45YzEuNCwxLjIsMi4yLDMuMywyLjMsNi42Yy0wLjEsMC40LTAuNSwwLjgtMC45LDAuOGwwLDAKCQkJCQljLTEuNCwwLTIuOSwwLTQuNSwwLjFjLTIsMC4xLTMuOSwwLjItNS44LDAuNWMtMS45LDAuMy0zLjgsMC43LTUuNiwxLjJjLTEuNywwLjUtMy40LDEuMy00LjgsMi40Yy0xLjQsMS0yLjUsMi4zLTMuNCwzLjgKCQkJCQljLTAuOSwxLjgtMS4zLDMuNy0xLjIsNS43YzAsMS44LDAuMywzLjYsMS4xLDUuMmMwLjcsMS41LDEuNywyLjcsMywzLjdjMS4zLDEsMi44LDEuOCw0LjQsMi4zYzEuNywwLjUsMy40LDAuOCw1LjIsMC44CgkJCQkJYzIuNCwwLDQuOC0wLjQsNy0xLjRjMS43LTAuNywzLjItMS44LDQuNC0zLjJoMC4xbDAsMGgwLjFjMC4zLTAuMSwwLjUtMC4xLDAuNywwLjFjMC4xLDAuMSwwLjIsMC4zLDAuMiwwLjR2MS40CgkJCQkJYzAsMC45LDAuOCwxLjcsMS43LDEuN2g3LjVjMSwwLDEuNy0wLjgsMS43LTEuOHYtMTcuOWMwLTMuNi0wLjItNy4zLTAuOC0xMC45Yy0wLjQtMi4zLTEuNC00LjQtMi44LTYuMiBNMjMzLjgsMTI2LjYKCQkJCQljMCwxLjEtMC4yLDIuMi0wLjgsMy4yYy0wLjUsMC45LTEuMiwxLjctMi4xLDIuMmMtMC45LDAuNi0xLjksMS4xLTIuOSwxLjNjLTEuMSwwLjMtMi4yLDAuNS0zLjQsMC41Yy0xLjMsMC0yLjctMC40LTMuOC0xCgkJCQkJYy0xLjItMC42LTEuOS0xLjktMS44LTMuMmMtMC4xLTEuMiwwLjQtMi4zLDEuMy0zLjFjMC45LTAuOCwyLTEuMywzLjItMS43YzEuMy0wLjQsMi42LTAuNiwzLjktMC43YzEuNC0wLjEsMi41LTAuMSwzLjQtMC4xCgkJCQkJaDIuMWMwLjUsMCwwLjgsMC40LDAuOSwwLjlMMjMzLjgsMTI2LjZ6Ii8+CgkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzYwLjIsMTA0LjJjLTEuNC0xLjgtMy4zLTMuMS01LjQtMy45Yy0yLjgtMS01LjctMS40LTguNy0xLjNjLTMuMiwwLTYuMywwLjUtOS4zLDEuNgoJCQkJCWMtMi4zLDAuOC00LjUsMi02LjUsMy42Yy0wLjcsMC43LTAuNiwxLjgsMC4xLDIuNWwwLDBsMy43LDMuOGwwLDBjMC43LDAuNywxLjksMC43LDIuNiwwYzAuOS0wLjgsMS45LTEuNSwzLTIuMQoJCQkJCWMxLjctMC44LDMuNS0xLjMsNS40LTEuMmMyLDAsMy45LDAuNiw1LjQsMS45YzEuNCwxLjIsMi4yLDMuMywyLjMsNi42Yy0wLjEsMC40LTAuNSwwLjgtMC45LDAuOGwwLDBjLTEuNCwwLTIuOSwwLTQuNSwwLjEKCQkJCQljLTEuOSwwLjEtMy45LDAuMi01LjgsMC41Yy0xLjksMC4zLTMuOCwwLjctNS42LDEuMmMtMS43LDAuNS0zLjQsMS4zLTQuOCwyLjRjLTEuNCwxLTIuNSwyLjMtMy4zLDMuOGMtMC45LDEuOC0xLjMsMy43LTEuMiw1LjcKCQkJCQljMCwxLjgsMC4zLDMuNiwxLjEsNS4yYzAuNywxLjUsMS43LDIuNywzLDMuN2MxLjMsMSwyLjgsMS44LDQuNCwyLjNjNCwxLjIsOC4zLDEsMTIuMi0wLjZjMS43LTAuNywzLjItMS44LDQuNC0zLjJoMC4xbDAsMGgwLjEKCQkJCQljMC4zLTAuMSwwLjYtMC4xLDAuOCwwLjFjMC4xLDAuMSwwLjIsMC4zLDAuMiwwLjR2MS40YzAsMC45LDAuOCwxLjcsMS43LDEuN2g3LjVjMSwwLDEuNy0wLjgsMS43LTEuOHYtMTcuOQoJCQkJCWMwLTMuNi0wLjItNy4zLTAuOC0xMC45Yy0wLjUtMi4zLTEuNC00LjQtMi44LTYuMiBNMzUyLjgsMTI2LjZjMCwxLjEtMC4yLDIuMi0wLjgsMy4yYy0wLjUsMC45LTEuMiwxLjctMi4xLDIuMgoJCQkJCWMtMC45LDAuNi0xLjksMS4xLTIuOSwxLjNjLTEuMSwwLjMtMi4yLDAuNS0zLjQsMC41Yy0xLjMsMC0yLjctMC40LTMuOC0xYy0xLjItMC42LTEuOS0xLjktMS44LTMuMmMtMC4xLTEuMiwwLjQtMi4zLDEuMy0zLjEKCQkJCQljMC45LTAuOCwyLTEuMywzLjItMS43YzEuMy0wLjQsMi42LTAuNiwzLjktMC43YzEuNC0wLjEsMi41LTAuMSwzLjQtMC4xaDIuMWMwLjUsMCwwLjgsMC40LDAuOSwwLjlMMzUyLjgsMTI2LjZ6Ii8+CgkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDYyLjksMTA0LjJjLTEuNC0xLjgtMy4zLTMuMS01LjQtMy45Yy0yLjgtMS01LjctMS40LTguNi0xLjNjLTMuMSwwLTYuMywwLjUtOS4yLDEuNgoJCQkJCWMtMi40LDAuOC00LjYsMi02LjUsMy42Yy0wLjcsMC43LTAuNiwxLjgsMC4xLDIuNWwwLDBsMy43LDMuOGwwLDBjMC43LDAuNywxLjksMC43LDIuNiwwYzAuOS0wLjgsMS45LTEuNSwzLTIuMQoJCQkJCWMxLjctMC44LDMuNS0xLjMsNS40LTEuMmMyLDAsMy45LDAuNiw1LjQsMS45YzEuNCwxLjIsMi4yLDMuMywyLjMsNi42Yy0wLjEsMC40LTAuNSwwLjgtMC45LDAuOGwwLDBjLTEuNCwwLTIuOSwwLTQuNSwwLjEKCQkJCQljLTEuOSwwLjEtMy45LDAuMi01LjgsMC41Yy0xLjksMC4zLTMuOCwwLjctNS42LDEuMmMtMS43LDAuNS0zLjQsMS4zLTQuOCwyLjRjLTEuNCwxLTIuNSwyLjMtMy4zLDMuOGMtMC45LDEuOC0xLjMsMy43LTEuMiw1LjcKCQkJCQljMCwxLjgsMC4zLDMuNiwxLjEsNS4yYzAuNywxLjUsMS44LDIuNywzLDMuN2MxLjMsMSwyLjgsMS44LDQuNCwyLjNjNCwxLjIsOC4zLDEsMTIuMi0wLjZjMS43LTAuNywzLjItMS44LDQuNC0zLjJoMC4xbDAsMGgwLjEKCQkJCQljMC4zLTAuMSwwLjUtMC4xLDAuNywwLjFjMC4xLDAuMSwwLjIsMC4zLDAuMiwwLjR2MS40YzAsMC45LDAuOCwxLjcsMS43LDEuN2g3LjVjMSwwLDEuNy0wLjgsMS43LTEuOHYtMTcuOQoJCQkJCWMwLTMuNi0wLjItNy4zLTAuOC0xMC45Yy0wLjQtMi4zLTEuNC00LjQtMi44LTYuMiBNNDU1LjYsMTI2LjZjMCwxLjEtMC4yLDIuMi0wLjcsMy4yYy0wLjUsMC45LTEuMiwxLjctMi4xLDIuMgoJCQkJCWMtMC45LDAuNi0xLjksMS4xLTIuOSwxLjNjLTEuMSwwLjMtMi4yLDAuNS0zLjQsMC41Yy0xLjMsMC0yLjctMC40LTMuOC0xYy0xLjItMC42LTEuOS0xLjktMS44LTMuMmMtMC4xLTEuMiwwLjQtMi4zLDEuMy0zLjEKCQkJCQljMC45LTAuOCwyLTEuMywzLjItMS43YzEuMy0wLjQsMi42LTAuNiwzLjktMC43YzEuMy0wLjEsMi41LTAuMSwzLjQtMC4xaDIuMWMwLjUsMCwwLjgsMC40LDAuOCwwLjlMNDU1LjYsMTI2LjZ6Ii8+CgkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzIxLDEwNC42Yy0xLjYtMS44LTMuNS0zLjItNS43LTQuMWMtMi40LTEtNC45LTEuNS03LjUtMS40Yy0yLjksMC01LjcsMC41LTguNCwxLjQKCQkJCQljLTIuNSwwLjktNC45LDIuMy02LjksNC4xYy0yLDEuOC0zLjUsNC00LjYsNi40Yy0yLjIsNi4yLTIuMiwxMi45LDAsMTkuMWMxLjEsMi40LDIuNiw0LjYsNC42LDYuNGMyLDEuOCw0LjMsMy4yLDYuOSw0LjEKCQkJCQljMi43LDEsNS41LDEuNSw4LjQsMS40YzMuMSwwLDYuMi0wLjcsOS4xLTJjMi4yLTEsNC4zLTIuNCw2LTQuMWMwLjYtMC43LDAuNi0xLjgsMC0yLjVsLTUuNC00bDAsMGwtMC40LTAuMwoJCQkJCWMtMC43LTAuNC0xLjYtMC4zLTIuMiwwLjNjLTAuOCwwLjgtMS42LDEuNi0yLjYsMi4yYy0xLjUsMC45LTMuMiwxLjQtNSwxLjNjLTIuMiwwLjEtNC4zLTAuNy01LjktMi4xYy0xLjgtMS45LTIuOS00LjMtMy4xLTYuOQoJCQkJCWMwLTAuNCwwLjMtMC44LDAuNy0wLjloMjUuMmMxLTAuMSwxLjctMC44LDEuNy0xLjh2LTJjMC0yLjgtMC40LTUuNy0xLjMtOC40QzMyMy45LDEwOC42LDMyMi43LDEwNi40LDMyMSwxMDQuNiBNMzEzLjEsMTE0LjkKCQkJCQloLTEzLjljLTAuNSwwLTAuOS0wLjQtMC45LTAuOWMwLjEtMC43LDAuMy0xLjMsMC42LTEuOWMwLjQtMC45LDEtMS43LDEuNy0yLjNjMC44LTAuNywxLjYtMS4zLDIuNi0xLjZjMS4xLTAuNCwyLjMtMC43LDMuNS0wLjYKCQkJCQljMi0wLjEsMy45LDAuNyw1LjMsMi4yYzEuMiwxLjIsMS45LDIuNywyLDQuM0MzMTMuOSwxMTQuNSwzMTMuNSwxMTQuOSwzMTMuMSwxMTQuOSIvPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI3NS4yLDEyMS4xTDI3NS4yLDEyMS4xbC0wLjMtMC40Yy0wLjMtMC42LTAuMy0xLjMsMC0xLjlsMTMuOS0xNy40YzAuMy0wLjQsMC4zLTAuOS0wLjEtMS4zCgkJCQkJYy0wLjItMC4xLTAuNC0wLjItMC42LTAuMmgtMTFjLTEuMSwwLTIuMiwwLjUtMi45LDEuNGwwLDBsLTAuNiwwLjhMMjYzLDExNmwtMC4xLDAuMmwwLDBsMCwwbC0wLjEsMC4xbDAsMGgtMC4xCgkJCQkJYy0wLjMsMC4xLTAuNSwwLjEtMC43LTAuMWMtMC4xLTAuMS0wLjEtMC4yLTAuMi0wLjNWODIuNWMwLTAuOS0wLjgtMS43LTEuNy0xLjdoLTguNmMtMC45LDAuMS0xLjYsMC44LTEuNywxLjd2NTYuOAoJCQkJCWMwLDAuOSwwLjgsMS43LDEuNywxLjdoOC41YzAuOSwwLDEuNy0wLjgsMS43LTEuN3YtMTYuMWMwLTAuMSwwLjEtMC4yLDAuMi0wLjNjMC4yLTAuMiwwLjUtMC4yLDAuNy0wLjFoMC4xbDAsMAoJCQkJCWMwLDAsMC4xLDAsMC4xLDAuMWwwLDB2MC4xbDAuMiwwLjJsMTAuNCwxNS43bDAsMGwwLjYsMC44bDAsMGMwLjcsMC45LDEuNywxLjQsMi44LDEuNGgxMS42YzAuMSwwLDAuMi0wLjEsMC4zLTAuMgoJCQkJCWMwLjMtMC4zLDAuNC0wLjcsMC4yLTFMMjc1LjIsMTIxLjF6Ii8+CgkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDMwLDEwMi45YzAuMS0wLjQsMC4yLTAuOCwwLjItMS4yYzAtMC4xLDAtMC4xLDAtMC4ybDAsMGMtMC4yLTAuOC0wLjktMS40LTEuNy0xLjRoLTYuOAoJCQkJCWMtMS43LDAtMy4yLDEuMi0zLjYsMi45bDAsMGwtMC4yLDAuOGwtNS44LDIxLjFjLTAuMSwwLjItMC4zLDAuMy0wLjYsMC4zYy0wLjMsMC0wLjUtMC4yLTAuNi0wLjRsLTAuMS0wLjNsMCwwbC01LjctMjEuM2wwLDAKCQkJCQlsMCwwbC0wLjEtMC40Yy0wLjUtMS41LTEuOS0yLjUtMy41LTIuNWgtNy40Yy0xLjcsMC0zLjIsMS4yLTMuNiwyLjhsMCwwdjAuMmwtMC4yLDAuNmwtNS4yLDIxYy0wLjIsMC4zLTAuNiwwLjQtMC45LDAuMwoJCQkJCWMtMC4xLTAuMS0wLjItMC4xLTAuMy0wLjNsLTYuMi0yMS4xbC0wLjMtMWMwLTAuMSwwLTAuMSwwLTAuMmwwLDBjLTAuNS0xLjUtMS45LTIuNS0zLjUtMi41aC03LjVjLTAuOCwwLTEuNSwwLjYtMS43LDEuNGwwLDAKCQkJCQljMCwwLjEsMCwwLjIsMCwwLjJjMCwwLjQsMC4xLDAuOCwwLjIsMS4ybDEyLjQsMzUuN2MwLDAuMSwwLjEsMC4zLDAuMiwwLjRjMC41LDEuMiwxLjcsMiwzLDIuMWg3LjJjMS41LTAuMSwyLjgtMS4xLDMuMi0yLjYKCQkJCQlsMCwwbDAuMy0xbDUuNy0yMC41YzAuMS0wLjIsMC4zLTAuMywwLjYtMC4zYzAuMiwwLDAuNCwwLjEsMC42LDAuM2w2LjUsMjAuOWMwLjEsMC40LDAuMywwLjgsMC40LDEuMmMwLjUsMS4yLDEuNywyLDMsMi4xaDcuMQoJCQkJCWMxLjMtMC4xLDIuNC0wLjksMy0yLjFsMCwwYzAuMS0wLjIsMC4zLTAuOCwwLjUtMS4zbDExLjYtMzQuNWMwLDAsMC0wLjEsMC4xLTAuMiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTUwOC44LDEwMS40TDUwOC44LDEwMS40YzAtMC4xLTAuMS0wLjItMC4xLTAuM2MtMC4zLTAuNi0wLjktMS0xLjYtMS4xaC03LjJjLTEuNCwwLTIuNiwwLjktMy4yLDIuMWwwLDAKCQkJCQlsMCwwYzAsMC4xLTAuMSwwLjItMC4xLDAuM2wtMC4xLDAuMmMwLDAuMS0wLjEsMC4yLTAuMSwwLjNsLTAuMiwwLjdsMCwwbC02LjYsMjEuNmwwLDBsLTAuMSwwLjNjLTAuMSwwLjQtMC41LDAuNy0wLjksMC42CgkJCQkJYy0wLjQsMC0wLjctMC4yLTAuOC0wLjZsLTcuOC0yMS45bC0wLjEtMC4zbC0wLjUtMS41Yy0wLjYtMS4xLTEuOC0xLjktMy4xLTEuOWgtOC4yYy0wLjYsMC4xLTEuMSwwLjUtMS4zLDEKCQkJCQljMCwwLjEtMC4xLDAuMi0wLjEsMC4zbDAsMGMtMC4xLDAuMywwLDAuNiwwLjEsMC45bDE1LjYsMzhjMC4yLDAuOCwwLjIsMS42LTAuMSwyLjRjMCwwLDAsMC4xLDAsMC4xbC0wLjMsMC43CgkJCQkJYy0wLjQsMS0wLjgsMi0xLjIsMi44Yy0wLjMsMC44LTAuOCwxLjUtMS40LDIuMWMtMC42LDAuNi0xLjMsMS0yLjEsMS4zYy0xLjEsMC4zLTIuMiwwLjUtMy4zLDAuNGgtNS4yYy0xLDAtMS43LDAuOC0xLjgsMS44CgkJCQkJdjYuNWMwLDEsMC44LDEuNywxLjgsMS44aDYuOWMyLjMsMC4xLDQuNy0wLjIsNi45LTAuOGMxLjYtMC41LDMuMS0xLjMsNC4zLTIuNWMxLjItMS4yLDIuMS0yLjUsMi44LTRjMC43LTEuNiwxLjUtMy40LDIuMy01LjUKCQkJCQlsMTYuNy00NS4yQzUwOC45LDEwMS45LDUwOC45LDEwMS43LDUwOC44LDEwMS40Ii8+CgkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTA3LjIsMTMyLjdjLTEuMiwwLTIuMywwLjQtMy4xLDEuM2MtMS42LDEuNy0xLjYsNC40LDAsNi4xYzEuNywxLjcsNC41LDEuOCw2LjIsMC4xYzAsMCwwLjEtMC4xLDAuMS0wLjEKCQkJCQljMS42LTEuNywxLjYtNC40LDAtNi4xQzUwOS42LDEzMy4yLDUwOC40LDEzMi43LDUwNy4yLDEzMi43Ii8+CgkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTgxLjYsMTA0LjZjLTEuOC0xLjgtNC0zLjItNi40LTQuMWMtNS4yLTEuOS0xMC45LTEuOS0xNi4xLDBjLTIuNCwwLjktNC41LDIuMy02LjQsNC4xCgkJCQkJYy0xLjgsMS44LTMuMiwzLjktNC4xLDYuMmMtMSwyLjQtMS41LDcuMi0xLjUsMTAuMmMwLDMuMSwwLjUsNi4yLDEuNSw5LjJjMS45LDQuOCw1LjgsOC41LDEwLjYsMTAuNGM1LjIsMS45LDEwLjksMS45LDE2LjEsMAoJCQkJCWMyLjQtMC45LDQuNi0yLjMsNi40LTQuMWMxLjgtMS44LDMuMi0zLjksNC4xLTYuMmMxLTIuOSwxLjYtNi4xLDEuNS05LjJjMC0zLTAuNS03LjctMS41LTEwLjIKCQkJCQlDNTg0LjgsMTA4LjYsNTgzLjQsMTA2LjUsNTgxLjYsMTA0LjYgTTU3OS42LDEyNy42Yy0wLjYsMS43LTEuNSwzLjItMi43LDQuNGMtMS4yLDEuMy0yLjYsMi4zLTQuMiwzYy0zLjUsMS40LTcuNSwxLjQtMTEsMAoJCQkJCWMtMS42LTAuNy0zLTEuNy00LjItM2MtMS4yLTEuMy0yLjEtMi44LTIuNy00LjRjLTAuNi0yLjItMS00LjQtMC45LTYuNmMwLTIuNiwwLjMtNS4xLDAuOS03LjZjMS4yLTMuMywzLjctNiw2LjktNy40CgkJCQkJYzMuNS0xLjUsNy41LTEuNSwxMSwwYzEuNiwwLjcsMywxLjcsNC4yLDNjMS4yLDEuMywyLjEsMi44LDIuNyw0LjRjMC42LDIuNSwwLjksNS4xLDAuOSw3LjYKCQkJCQlDNTgwLjYsMTIzLjIsNTgwLjIsMTI1LjUsNTc5LjYsMTI3LjYiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01MjIuMywxMDljMS4xLTEuMywyLjQtMi4zLDQtM2MxLjgtMC43LDMuNi0xLjEsNS41LTFjMS44LDAsMy41LDAuMyw1LjIsMWMxLjIsMC42LDIuMywxLjQsMy4zLDIuMwoJCQkJCWMwLjcsMC42LDEuNywwLjYsMi40LDAuMWwyLjMtMi4xYzAuNy0wLjYsMC44LTEuNywwLjItMi41Yy0xLjYtMS40LTMuNC0yLjUtNS4zLTMuM2MtMi41LTEtNS4yLTEuNS04LTEuNQoJCQkJCWMtMi43LDAtNS40LDAuNS03LjksMS41Yy0yLjMsMC45LTQuNCwyLjMtNi4yLDQuMWMtMS43LDEuOC0zLjEsMy45LTQsNi4zYy0xLjksNi4yLTEuOSwxMi45LDAsMTkuMWMwLjksMi4zLDIuMiw0LjUsNCw2LjMKCQkJCQljMS43LDEuOCwzLjgsMy4yLDYuMiw0LjFjNS4xLDEuOSwxMC43LDEuOSwxNS44LDBjMi0wLjgsMy44LTEuOSw1LjMtMy40YzAuNi0wLjcsMC42LTEuOC0wLjEtMi40bC0yLTEuOQoJCQkJCWMtMC43LTAuNi0xLjgtMC42LTIuNSwwYy0yLjIsMi4zLTUuMywzLjUtOC41LDMuNGMtMS44LDAtMy42LTAuNC01LjItMS4xYy0xLjUtMC43LTIuOS0xLjctNC0zYy0xLjEtMS4zLTItMi44LTIuNi00LjUKCQkJCQljLTAuNi0yLjMtMC45LTQuNy0wLjktNy4xYzAtMi40LDAuMy00LjcsMC44LTcuMUM1MjAuNCwxMTEuOSw1MjEuMiwxMTAuMyw1MjIuMywxMDkiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02NDcuMywxMDguNGMtMC40LTEuOC0xLjMtMy41LTIuNC01Yy0xLjItMS40LTIuNy0yLjUtNC40LTMuMWMtMi4yLTAuOC00LjUtMS4yLTYuOC0xLjEKCQkJCQljLTIuNS0wLjEtNSwwLjYtNy4xLDEuOWMtMS42LDEuMS0yLjksMi41LTQsNGwwLDBsLTAuMiwwLjNsMCwwbC0wLjEsMC4xYy0wLjEsMC4xLTAuMywwLjItMC41LDAuMmMtMC4yLDAtMC41LTAuMS0wLjYtMC40CgkJCQkJYzAtMC4xLTAuMS0wLjItMC4yLTAuM2MtMC4yLTAuMy0wLjQtMC42LTAuNi0xYy0wLjYtMC45LTEuMy0xLjctMi4xLTIuM2MtMS0wLjgtMi4yLTEuNC0zLjQtMS45Yy0zLjEtMS02LjQtMS05LjUtMC4yCgkJCQkJYy0xLjMsMC40LTIuNSwwLjktMy42LDEuNmMtMSwwLjYtMiwxLjQtMi44LDIuM2MtMC4zLDAuMy0wLjUsMC42LTAuNywwLjlsLTAuMSwwLjFjMCwwLTAuMSwwLjEtMC4xLDAuMWwwLDAKCQkJCQljLTAuMSwwLjEtMC4zLDAuMi0wLjUsMC4yYy0wLjMsMC0wLjYtMC4yLTAuNi0wLjV2LTIuNmMwLTEtMC44LTEuNy0xLjgtMS43SDU5M2MtMSwwLTEuNywwLjgtMS43LDEuOHYzNy40YzAsMSwwLjgsMS44LDEuOCwxLjgKCQkJCQloMi43YzEsMCwxLjgtMC44LDEuOC0xLjh2LTE5LjhjMC0yLDAuMi00LDAuNy01LjljMC40LTEuNiwxLjEtMy4yLDIuMS00LjZjMC45LTEuMywyLjItMi4zLDMuNi0zYzEuNy0wLjcsMy41LTEuMSw1LjMtMQoJCQkJCWMyLjYsMCw0LjQsMC45LDUuNiwyLjZzMS43LDQuNywxLjcsOC45djIyLjhjMCwxLDAuOCwxLjgsMS44LDEuOGgyLjdjMSwwLDEuOC0wLjgsMS44LTEuOHYtMjMuMmMwLTEuNSwwLjItMy4xLDAuOC00LjUKCQkJCQljMC41LTEuMywxLjItMi41LDIuMS0zLjVjMC45LTEsMS45LTEuNywzLjEtMi4zYzEuMi0wLjUsMi41LTAuOCwzLjgtMC44YzEuNi0wLjEsMy4xLDAuMiw0LjUsMC45YzEuMSwwLjUsMi4xLDEuMywyLjgsMi4zCgkJCQkJYzAuNywxLDEuMiwyLjEsMS41LDMuM2MwLjMsMS4yLDAuNCwyLjUsMC40LDMuOHYyNGMwLDEsMC44LDEuOCwxLjgsMS44aDIuN2MxLDAsMS44LTAuOCwxLjgtMS44di0yNC4zCgkJCQkJQzY0OCwxMTIuNyw2NDcuOCwxMTAuNSw2NDcuMywxMDguNCIvPgoJCQk8L2c+CgkJCTxwYXRoIGlkPSJIb3VzZV8xNl8iIGNsYXNzPSJzdDAiIGQ9Ik05NS4zLDQzLjljMi4yLTEuNCw1LTEuNCw3LjIsMGM1LjUsMy41LDEwLjgsNy4zLDE1LjgsMTEuNGMwLDAsMS40LDEsMS40LTAuNwoJCQkJYzAsMC0wLjItNC44LDAuNC02LjJjMC40LTEuMSwxLjQtMS45LDIuNi0xLjljMCwwLDYuMiwwLjMsMTAuMiwwLjhjMS44LDAuMywzLjEsMS43LDMuMywzLjVjMCwwLDIuNSwxNi45LDMuMSwyMwoJCQkJYzAsMCwwLjUsMy4xLDUsOC40YzAsMCw5LjEsMTIuNywxMC4yLDE1LjJjMCwwLDIuMSw0LjQtMi40LDVjMCwwLTguMywwLjgtOS4xLDFjLTEuMSwwLjEtMiwxLjEtMS45LDIuM2MwLDAsMCwwLDAsMC4xCgkJCQljMCwwLTAuNCwyOS40LTIuNiw0My42YzAsMC0wLjYsNS42LTMuNyw1LjVjMCwwLTguNi0wLjMtMTAuNi0wLjJjMCwwLTAuOSwwLjEtMC43LTEuMWMwLDAsNC40LTQ1LjksMS40LTY5LjFjMCwwLTAuMS0zLTIuNC0zLjYKCQkJCWMwLDAtMi4xLTAuOC00LjEsMS45YzAsMC0xMy42LDE3LjItMTMuNiw0MS40YzAsMC0wLjIsNy4zLDAuOSw5LjJjMCwwLDAuNywxLjMsNC4yLDEuNmw0LjUsMC42YzAsMCwwLjgsMCwwLjgsMS4xCgkJCQljMCwwLTEsMTMuNS0xLjMsMTUuOWMwLDAuNS0wLjEsMS4xLTAuMywxLjZjMCwwLTAuMiwwLjUtMS42LDAuNGMwLDAtMTkuOC0wLjEtMjIsMGMwLDAtMC45LDAuMS0xLjEtMC41cy0xLjQtMTcuNC0xLjMtMTkuOAoJCQkJYzAtMC41LDAuMi0xLDAuNy0xLjJjMy4xLTEuOSw1LjEtNS4xLDUuNS04LjdjMCwwLDAuMy0xLjQsMC4xLTcuN2MwLDAsMC43LTI1LjgsMC45LTMwYzAsMCwwLjItMS40LTEuNy0xLjcKCQkJCWMtMC45LTAuMi0xLjgsMC40LTIsMS4zYzAsMC4xLDAsMC4xLDAsMC4yYzAsMC0xLjMsMTctMSwyMy44YzAsMCwwLjQsNC40LTIuNiw0LjVjMCwwLTMsMC40LTMuMS0zLjJjMCwwLDAuMi0xNi42LDAuOS0yNC43CgkJCQljMC0wLjktMC43LTEuNy0xLjYtMS44Yy0xLTAuMi0xLjksMC41LTIuMSwxLjVjMCwwLjEsMCwwLjEsMCwwLjJjMCwwLTEuMywxNS44LTEsMjQuMmMwLDAsMC40LDQuMS0yLjksMy45YzAsMC0yLjcsMC4zLTIuOS0zLjMKCQkJCWMwLDAsMC43LTIyLjcsMC45LTI0LjRjMC4xLTEtMC42LTEuOS0xLjYtMi4xYy0wLjEsMC0wLjEsMC0wLjIsMGMtMS0wLjEtMS44LDAuNS0yLDEuNWMwLDAuMSwwLDAuMSwwLDAuMmMwLDAtMS4yLDI3LjEtMSwzNS4xCgkJCQljMCwwLTAuMSw4LjIsNS45LDExLjVjMCwwLDAuOSwwLjUsMC45LDEuM2MwLDAsMC43LDE0LjQsMS4zLDE5YzAsMCwwLjIsMS4xLTAuOCwxLjFMNjIuOSwxNTVjMCwwLTIuNSwwLjItMy4xLTMKCQkJCWMtMC41LTIuOS0zLjMtMjYuOS0yLjgtNDZjMC4xLTEuMi0wLjctMi4zLTEuOS0yLjVjMCwwLTcuOC0wLjctOS43LTEuMmMtMS43LTAuNC0yLjgtMi4yLTIuMy0zLjljMC4xLTAuMywwLjItMC42LDAuMy0wLjgKCQkJCUM0My41LDk3LjcsNjAuMyw2NS42LDk1LjMsNDMuOXoiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="
        height="54px"
        alt="Logo"
      />
    </aside>

    <nav className={styles.nav}>
      <Link route={HOME}>
        <a className={styles.nav__item}>{props.translate('home')}</a>
      </Link>
      <Link route={COMPONENTS}>
        <a className={styles.nav__item}>{props.translate('components')}</a>
      </Link>
    </nav>
  </header>
);

export { Header };