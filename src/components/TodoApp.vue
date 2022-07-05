<template>
    <v-card 
        
        class="mx-auto  mt-15" 
        width="min(90%, 25rem)"
        min-height="350"
        elevation="2" style="background:#DFBB9D">
        <h1 class="text-center">Todo list</h1>
    <v-divider></v-divider>
        <div v-if="!isEditing" class="pa-5 form">
            <v-text-field
            v-model="task"
            label="Input Task"
            solo
            @keyup.enter="addTask"
          ></v-text-field>
          <v-btn @click="addTask" block  color="#dfa16f">ADD</v-btn>
        </div>
        <div v-else class="pa-5 form">
            <v-text-field
            v-model="task"
            label="Input Task"
            solo
            @keyup.enter="updateTask"
          ></v-text-field>
          <v-btn @click="updateTask" block color="#dfa16f">Update</v-btn>
        </div>
        <v-divider></v-divider>
        <div class="pa-5 taskItems" >
                <div v-for="(task, i) in tasks " :key="i" id="output">
                        {{ task }}
                    <div class="button-group ">
                        <v-btn @click="editTask(i, task)" class=""  small >
                            <v-icon color="red">
                                mdi-pen
                            </v-icon>
                        </v-btn>
                        <v-btn @click="deleteTask(i)" class="ml-2 "  small >
                            <v-icon color="red">
                                mdi-delete
                            </v-icon>
                        </v-btn>
                    </div> 
                    
                </div>
            
        </div>
            
        
    </v-card>
</template>

<script>

export default {
    data: () => ({
        task: '',
        tasks: [],
        isEditing: false,
        selectedTask: null,
        
    }),
    methods:{
        addTask(){
            if(this.task.length === 0) return
            this.tasks.push(this.task)
            this.task = ''
        },
        editTask(i, task){
            this.task = task
            this.selectedTask = i
            this.isEditing = true
        },
        updateTask(){
            this.tasks.splice(this.selectedTask, 1, this.task)
            this.isEditing = false
            this.task = ''

            
        },
        deleteTask(i){
            this.tasks.splice(i, 1)
        },
        
    }
}
</script>

<style scoped>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
h1{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #150c05;
    }
.output{
    /* background: red; */
    margin-bottom: .7rem;
    }
.button-group{
    float: right;
    margin: 0;
    padding: 0;
    padding-block: auto;
    }
#output{
    font-size: 1.5rem;
    font-weight: 400;
    padding: .5rem;
    line-height: 28px;
    }
    
</style>