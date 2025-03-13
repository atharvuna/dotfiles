# Initial setup
set -g default-terminal xterm-256color

unbind C-b
set -g prefix `
bind-key ` last-window
bind-key e send-prefix

# Use Alt-arrow keys without prefix key to switch panes
bind -n M-Left select-pane -L
bind -n M-Right select-pane -R
bind -n M-Up select-pane -U
bind -n M-Down select-pane -D

# Set easier window split keys
bind-key v split-window -h
bind-key h split-window -v

# Shift arrow to switch windows
bind -n S-Left  previous-window
bind -n S-Right next-window

# Easily reorder windows with CTRL+SHIFT+Arrow
bind-key -n C-S-Left swap-window -t -1
bind-key -n C-S-Right swap-window -t +1

# Easy config reload
bind-key r source-file ~/.tmux.conf \; display-message "tmux.conf reloaded."

# Key bindings for copy-paste
setw -g mode-keys vi
unbind p
bind p paste-buffer
bind-key -T copy-mode-vi 'v' send -X begin-selection
bind-key -T copy-mode-vi 'y' send -X copy-selection-and-cancel

# Mouse Mode
set -g mouse on

# Lengthen the amount of time status messages are displayed
set-option -g display-time 3000
set-option -g display-panes-time 3000

# Allow the arrow key to be used immediately after changing windows.
set-option -g repeat-time 0
# No delay for escape key press
set -sg escape-time 0

# Disable bell
setw -g monitor-bell off
