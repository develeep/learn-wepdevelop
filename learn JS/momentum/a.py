h, m = map(int, input().split())
m = m-45
if m < 0:
    m = 60+m
    if h > 0:
        print(h-1, m)
    else:
        print(23, m)
elif m >= 0:
    print(h, m)
