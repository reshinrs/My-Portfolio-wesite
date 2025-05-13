def ascii(strs):
    strs = "GE#@T)HA"
    
    import re
    numbers = re.findall(r'\d+', strs)
    if numbers:  
        ints = int(numbers[0]) 
    else:
        ints = 0  

    count = 0 
    low = 0
    high = ints - 1
    while (low <= high):
        mid = (low + high) // 2
        if mid == ints:
            count += 1
        if low == ints:
            count += 1
        else:
            low = mid + 1
        if high == ints:
            count += 1
        else:
            high = mid - 1
    acs = ascii(count)
    count_str = str(count) 
    for i in range(0, len(count_str)):  
        countdigit = int(count_str[i]) - (i + 1)  
    return countdigit 