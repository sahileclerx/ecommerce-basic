const useStrReplace = (str, victim, char) => {
    return str.split(victim).join(char);
}

export default useStrReplace;