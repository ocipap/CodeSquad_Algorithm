arr = [0]*12
arr[0] = 0
arr[1] = 1
arr[2] = 2
arr[3] = 4

for i in range(4, 12) :
    arr[i] = arr[i -3] + arr[i - 2] + arr[i -1]

for _ in range(0, int(input())):
    num = int(input())
    print(arr[num])
