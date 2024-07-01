import ctypes
import objc
import sys

# Load the necessary macOS frameworks
objc.loadBundleFunctions(ctypes.CDLL(ctypes.util.find_library('Foundation')), globals(), [
    ('NSApp', '@'),
    ('NSApplicationMain', 'i', 'v'),
])

objc.loadBundleFunctions(ctypes.CDLL(ctypes.util.find_library('AppKit')), globals(), [
    ('NSApplicationLoad', 'v'),
    ('NSMakeRect', '{CGRect={CGPoint=dd}{CGSize=dd}}', 'NSRect'),
    ('NSWindow', '@', 'i'),
    ('NSMakeWindow', '@', 'i{NSRect={CGPoint=dd}{CGSize=dd}}li'),
    ('NSWindowMakeKeyAndOrderFront', 'v@', 'i@'),
])

# Callback to handle the window close event
def windowWillClose_(self, notification):
    sys.exit(0)

# Initialize the application
NSApplicationLoad()
app = NSApp()
app.setActivationPolicy_(objc.NSApplicationActivationPolicyRegular)

# Create a window
window_rect = objc.NSMakeRect(0, 0, 400, 300)
window = objc.NSMakeWindow(
    objc.NSWindow(),
    window_rect,
    objc.NSWindowTitleVisible,
    False
)

# Make the window key and order it front
objc.NSWindowMakeKeyAndOrderFront(window, None)

# Set the window delegate to handle the close event
window.setDelegate_(window)

# Bind the close event to the callback
objc.classAddMethod(objc.objc_getClass('AppDelegate'), 'windowWillClose:', windowWillClose_)

# Start the application main loop
objc.NSApplicationMain(0, None)
